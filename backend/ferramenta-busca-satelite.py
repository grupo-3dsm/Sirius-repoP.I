import csv
import gzip
from io import StringIO
from urllib.request import urlopen
import requests
from PIL import Image
import cv2
import numpy as np
import zipfile

satelites = { 
    'Landsat' : 'https://landsat-pds.s3.amazonaws.com/c1/L8/scene_list.gz',
    'CBERS' : 'CBERS'}

cameras = {
    'AWFI' : 'https://s3.amazonaws.com/cbers-meta-pds/AWFIscene_list.csv.gz',
    'MUX' : 'https://s3.amazonaws.com/cbers-meta-pds/MUXscene_list.csv.gz',
    'PAN10M' : ' https://s3.amazonaws.com/cbers-meta-pds/PAN10Mscene_list.csv.gz',
    'PAN5M' : ' https://s3.amazonaws.com/cbers-meta-pds/PAN5Mscene_list.csv.gz'}



#Escolha de satélite
tipo_satelite = input('Digite qual satélite você deseja: CBERS ou Landsat ')
camera = satelites[tipo_satelite]

#AWFI, MUX, PAN1 OU PAN5M
if tipo_satelite == 'CBERS':
    tipo_camera = input('Digite qual câmera você deseja: ')
    camera = cameras[tipo_camera]

#Intervalo de datas para procurar
data_inicio = input('Digite uma data de inicio: ')
data_fim = input('Digite uma data de fim: ')

#latitude e longitude
lat = float(input('Digite a latitude: '))
lon = float(input('Digite a longitude: '))

if tipo_satelite == 'Landsat':
    nuvem = int(input('Digite qual cobertura de nuvem desejada: '))

    

# Leitura e unzip
response = urlopen(camera)
gunzip_response = gzip.GzipFile(fileobj=response)
content = gunzip_response.read()
 
# Lendo o dicionário
scenes = list(csv.DictReader(StringIO(content.decode("utf-8"))))

def busca_cbers(scene):
    lat_max = float(scene['ul_lat'])
    lat_min = float(scene['lr_lat']) 
    lon_max = float(scene['ur_lon']) 
    lon_min = float(scene['ll_lon'])
    localizacao = lat_min <= lat and lat_max >= lat and \
                       lon_min <= lon and lon_max >= lon
    
    data_filtro = scene['acquisition_date'] >= '{}'.format(data_inicio) and scene['acquisition_date'] <= '{}'.format(data_fim)

    return data_filtro and localizacao

def busca_landsat(scene):
            localizacao = float(scene['min_lat']) < lat and float(scene['max_lat']) > lat and \
                                float(scene['min_lon']) < lon and float(scene['max_lon']) > lon
            data_filtro = scene['acquisitionDate'] >= '{}'.format(data_inicio) and scene['acquisitionDate'] <= '{}'.format(data_fim)

            nuvem_max = float(scene['cloudCover']) <= float(nuvem)

            return data_filtro and localizacao and nuvem_max


if tipo_satelite == 'CBERS':
    busca_satelite = [scene for scene in scenes if busca_cbers(scene)]
    i = 0
    resultado = []
    if len(busca_satelite) > 1:
        while i < len(busca_satelite):
            busca = [busca_satelite[i]['acquisition_date'][0:10], busca_satelite[i]]
            resultado.append(busca)
            print('Econtramos essa data: ' + busca_satelite[i]['acquisition_date'][0:10])
            i = i + 1
    else:
        busca = [busca_satelite[i]['acquisition_date'][0:10], busca_satelite[0]]
        resultado.append(busca)
        print('Econtramos essa data: ' + busca_satelite[0]['acquisition_date'][0:10])
else:
    busca_satelite = [scene for scene in scenes if busca_landsat(scene)]
    i = 0
    resultado = []
    if len(busca_satelite) > 1:
        while i < len(busca_satelite):
            busca = [busca_satelite[i]['acquisitionDate'][0:10] + ' ' + busca_satelite[i]['cloudCover'], busca_satelite[i]]
            resultado.append(busca)
            print('Econtramos essa data: ' + busca_satelite[i]['acquisitionDate'][0:10] + ' e essa cobertura de nuvens: ' + busca_satelite[i]['cloudCover'])
            i = i + 1
    else:
        busca = [busca_satelite[0]['acquisitionDate'][0:10] + ' ' + busca_satelite[0]['cloudCover'], busca_satelite[0]]
        resultado.append(busca)
        print('Econtramos essa data: ' + busca_satelite[0]['acquisitionDate'][0:10] + ' e essa cobertura de nuvens: ' + busca_satelite[0]['cloudCover'])



if tipo_satelite == 'CBERS':
    resposta = input('Qual das datas você deseja consultar? Digite aqui: ')
else:
    data = input('Qual das datas você deseja consultar? Digite aqui: ')
    nuvem = input('Digite a cobertura de nuvens correspondente: ')
    resposta = data + ' ' + nuvem

resultado = dict(resultado)
pesquisa = resultado[resposta]

if tipo_satelite == 'CBERS':
    url_json = "https://cbers-stac-1-0.s3.amazonaws.com/" + pesquisa['download_url']+".json"
else:
    if len(pesquisa['row']) == 3:
        row = pesquisa['row']
    else:
        row = '0'+ pesquisa['row']
    
    if len(pesquisa['path']) == 3:
        path = pesquisa['path']
    else:
        path = '0'+pesquisa['path']
            
    url_json = 'https://landsat-stac.s3.amazonaws.com/landsat-8-l1/' + path + '/' + row + '/' + pesquisa['acquisitionDate'][0:10] + "/" + pesquisa['entityId'][:-5] + '.json'
   
#Acessa o STAC

link_json = requests.get(url_json)

# Faz a leitura do arquivo json

arquivo_json = link_json.json()

# Funções


### Landsat

def baixar_landsat(url, endereco):    # requisição do servidor
            resposta = requests.get(url)
            if resposta.status_code == requests.codes.OK:  # verifica se esta ok para acessar 
                with open(endereco, 'wb') as novo_arquivo:
                    novo_arquivo.write(resposta.content)
                print("Download finalizado. Salvo em: {}".format(endereco))
            else:
                resposta.raise_for_status()   


### CBERS

def visualizar_jpg(url):
    img_jpg = Image.open(requests.get(url, stream=True).raw)
    return img_jpg

def tiff(url):
  with open("imagem-satelite.tiff", 'wb') as imagem:
    resposta = requests.get(url, stream=True)

    if not resposta.ok:
      print("Ocorreu um erro, status:" , resposta.status_code)
    else:
      for dado in resposta.iter_content(1024):
        if not dado:
            break

        imagem.write(dado)

  return print("Imagem Salva! Da uma olhadinha na pasta =)")

### CBERS

def bandas_cbers():
    
    img = cv2.imread("imagem-satelite.tiff")
    (canalAzul, canalVerde, canalVermelho) = cv2.split(img)
    zeros = np.zeros(img.shape[:2], dtype = "uint8")


    cv2.imwrite("Banda_4_vermelho.tiff", cv2.merge([zeros, zeros, canalVermelho]))
    cv2.imwrite("Banda_3_verde.tiff", cv2.merge([zeros, canalVerde, zeros]))
    cv2.imwrite("Banda_2_azul.tiff", cv2.merge([canalAzul, zeros, zeros]))

    

    z = zipfile.ZipFile('satelite.zip', 'w', zipfile.ZIP_DEFLATED)
    z.write("Banda_4_vermelho.tiff")
    z.write("Banda_3_verde.tiff")
    z.write("Banda_2_azul.tiff")
    z.close()
    return print("Salvo!! É só acessar sua pasta agora =)")




def contraste_brilho_cbers():
    img = cv2.imread("imagem-satelite.tiff")

    alpha = 2 # Controle de Contraste (pode variar de 1.0 a 3.0)
    beta = 0 # Controle de brilho (pode variar de 0 a 100)

    adjuste = cv2.convertScaleAbs(img, alpha=alpha, beta=beta)
    cv2.imwrite("novasatelite.tiff", adjuste)
    return print("Salvo!! É só acessar sua pasta agora =)")


visualizar = input('Você deseja visualizar a imagem? (S/N):')
if visualizar == 'S':
    if tipo_satelite == 'CBERS':
        img_jpg_url = arquivo_json['assets']['thumbnail']['href']
        img_jpg = visualizar_jpg(img_jpg_url)
        img_jpg.show()
    else:
        img_jpg_url = arquivo_json['assets']['thumbnail']['href']
        img_jpg = visualizar_jpg(img_jpg_url)
        img_jpg.show()



baixar_tiff = input('Você deseja baixar a imagem em formato .tiff? (S/N):')
if baixar_tiff == 'S':
    if tipo_satelite == 'CBERS':
        img_jpg_url = arquivo_json['assets']['thumbnail']['href']
        img_jpg = tiff(img_jpg_url)
    else:
        
        url = arquivo_json['assets']['thumbnail']['href']
        img_jpg = tiff(url)


while True:
    bandas = input('Você deseja baixar as bandas separadas? (S/N):' )
    if bandas == 'S':
        if tipo_satelite == 'CBERS':
            try:
                bandas_cbers()
                break
            except:
                print('Precisa baixar a imagem em formato .tiff antes, caso queira as bandas separadas!')
                break
        else:
            i = 1
            while i <= 11:
                banda = 'B' + str(i)
                url = arquivo_json['assets'][banda]['href']
                nome = 'Landasat' + banda + '.tiff'
                baixar_landsat(url, nome)
                i = i + 1
            
            break

if tipo_satelite == 'CBERS':
    while True:
        brilho = input('Você que aplicar brilho e contraste? (S/N):' )
        if brilho == 'S':
            try:
                contraste_brilho_cbers()
                break
            except:
                print('Precisa baixar a imagem em formato .tiff antes, caso queira modificar o contraste e o brilho!')
                break
        
