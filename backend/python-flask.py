# import main Flask class and request object
from flask import Flask, request, session, redirect, url_for
import csv
import gzip
from io import StringIO
from urllib.request import urlopen
import requests
import leafmap
import os 
from ipyleaflet import Map, GeoJSON
from PIL import Image
import cv2
import numpy as np
import zipfile
import json
import urllib.request
import sys

# create the Flask app
app = Flask(__name__)

json_file = []

@app.route('/busca', methods=["GET"])
def busca():

    class Parametros:
        def __init__(self, satelite : str, data_inicio : str, data_fim : str):
            self.satelite = satelite
            self.inicio = data_inicio
            self.fim = data_fim
            self.lat = []
            self.lon = []
            self.cam = []
            self.nuvem_max = []

        def nuvem(self, nuvem : float):
            self.nuvem_max.append(nuvem)
        

        def localidade(self, lat : float, lon : float):
            self.lat.append(float(lat))
            self.lon.append(float(lon))

        # problemas aqui na camera
        def camera(self, cam : str):
            self.cam.append(cam)

        def info(self):
            return self.satelite, self.inicio, self.fim, self.lat, self.lon, self.cam, self.nuvem_max



    buscar = Parametros(request.args.get('satelite'), request.args.get('inicio'), request.args.get('fim'))
    buscar.localidade(request.args.get('lat'),request.args.get('lon'))
    buscar.nuvem(request.args.get('nuvem'))
    buscar.camera(request.args.get('camera'))

    satelites = { 
    'Landsat' : 'https://landsat-pds.s3.amazonaws.com/c1/L8/scene_list.gz',
    'CBERS' : 'CBERS'}

    cameras = {
    'AWFI' : 'https://s3.amazonaws.com/cbers-meta-pds/AWFIscene_list.csv.gz',
    'MUX' : 'https://s3.amazonaws.com/cbers-meta-pds/MUXscene_list.csv.gz',
    'PAN10M' : ' https://s3.amazonaws.com/cbers-meta-pds/PAN10Mscene_list.csv.gz',
    'PAN5M' : ' https://s3.amazonaws.com/cbers-meta-pds/PAN5Mscene_list.csv.gz'}


    class landsat:

        def __init__(self):
            self.aws = []
            self.result= []
            return

        def acessar_aws(self,satelite):
            abrir = satelites[satelite]


            # Leitura e unzip 
            response = urlopen(abrir)
            gunzip_response = gzip.GzipFile(fileobj=response)
            content = gunzip_response.read()
                
            # Lendo o dicionário
            scenes = list(csv.DictReader(StringIO(content.decode("utf-8"))))
            self.aws.append(scenes)
            return scenes
            

        def busca(self, scene, nuvem, lat, lon, inicio, fim):
            localizacao = float(scene['min_lat']) < lat and float(scene['max_lat']) > lat and \
                                float(scene['min_lon']) < lon and float(scene['max_lon']) > lon
            data_filtro = scene['acquisitionDate'] >= '{}'.format(inicio) and scene['acquisitionDate'] <= '{}'.format(fim)

            nuvem = float(scene['cloudCover']) <= float(nuvem)

            return data_filtro and localizacao and nuvem

        
        #mostra resultados do landsat

        def resultado(self,busca_satelite):
            i = 0
            if len(busca_satelite) > 1:
                while i < len(busca_satelite):
                    busca = [busca_satelite[i]['acquisitionDate'][0:10] + ' ' + busca_satelite[i]['cloudCover'], busca_satelite[i]]
                    self.result.append(busca)
                    #print('Data: ' + busca_satelite[i]['acquisitionDate'][0:10]+ ", Nuvem: " + busca_satelite[i]['cloudCover'])
                    i = i + 1
            elif len(busca_satelite) == 1:
                busca = [busca_satelite[0]['acquisitionDate'], busca_satelite[0]]
                self.result.append(busca)
                #print('Econtramos essa data: ' + busca_satelite[0]['acquisitionDate'])
            else:
                busca = ['Não houve nenhum resultado, tente outros parâmetros!', '']
                self.result.append(busca)
            return
                
            
        def get_scenes(self):
            self.scenes = self.aws[0]
            return self.scenes

        def get_resultados(self):
            self.resultados = dict(self.result)
            return self.resultados

    class cbers:

        def __init__(self):
            self.aws = []
            self.result= []
            return

        def acessar_aws(self,camera):
            abrir = cameras[camera[0]]


            # Leitura e unzip 
            response = urlopen(abrir)
            gunzip_response = gzip.GzipFile(fileobj=response)
            content = gunzip_response.read()
                
            # Lendo o dicionário
            scenes = list(csv.DictReader(StringIO(content.decode("utf-8"))))
            self.aws.append(scenes)
            return scenes
            

        def busca(self, scene, lat, lon, inicio, fim):
            lat_max = float(scene['ul_lat'])
            lat_min = float(scene['lr_lat']) 
            lon_max = float(scene['ur_lon']) 
            lon_min = float(scene['ll_lon'])
            localizacao = lat_min <= lat and lat_max >= lat and \
                            lon_min <= lon and lon_max >= lon
            
            data_filtro = scene['acquisition_date'] >= '{}'.format(inicio) and scene['acquisition_date'] <= '{}'.format(fim)
            

            return data_filtro and localizacao

        
        #mostra resultados do landsat

        def resultado(self,busca_satelite):
            i = 0
            if len(busca_satelite) > 1:
                while i < len(busca_satelite):
                    busca = [busca_satelite[i]['acquisition_date'][0:10], busca_satelite[i]]
                    self.result.append(busca)
                    #print('Econtramos essa data: ' + busca_satelite[i]['acquisition_date'][0:10])
                    i = i + 1
            elif len(busca_satelite) == 1:
                busca = [busca_satelite[0]['acquisition_date'][0:10], busca_satelite[0]]
                self.result.append(busca)
                #print('Econtramos essa data: ' + busca_satelite[0]['acquisition_date'][0:10])
            else:
                busca = ['Não houve nenhum resultado, tente outros parâmetros!', '']
                self.result.append(busca)
                
            return 
                
            
        def get_scenes(self):
            self.scenes = self.aws[0]
            return self.scenes

        def get_resultados(self):
            self.resultados = dict(self.result)
            return self.resultados



        
    #Reconhecendo diferentes satélites

    if buscar.satelite == 'CBERS':

        bers = cbers()
        bers.acessar_aws(buscar.cam)
    
        busca_satelite = [scene for scene in bers.get_scenes() if bers.busca(scene, buscar.lat[0], buscar.lon[0], buscar.inicio, buscar.fim)]
        
        bers.resultado(busca_satelite)
        
        resultadoJson = json.dumps(bers.get_resultados())
        json_file.append(resultadoJson)


    else:
        #landsat

        sat = landsat()

        sat.acessar_aws(buscar.satelite)
    
        busca_satelite = [scene for scene in sat.get_scenes() if sat.busca(scene, buscar.nuvem_max[0], buscar.lat[0], buscar.lon[0], buscar.inicio, buscar.fim)]
        
        sat.resultado(busca_satelite)

        resultadoJson = json.dumps(sat.get_resultados())
        json_file.append(resultadoJson)
        
        
    return resultadoJson
    
@app.route('/imagens')
def imagem():
    class stac:
        def __init__(self):
            self.url = []

            return

        def stac_cbers(self, pesquisa):
            url_json = "https://cbers-stac-1-0.s3.amazonaws.com/" + pesquisa['download_url']+".json"
            self.url.append(url_json)

        def stac_landsat(self, pesquisa):
            if len(pesquisa['row']) == 3:
                row = pesquisa['row']
            else:
                row = '0'+ pesquisa['row']
        
            if len(pesquisa['path']) == 3:
                path = pesquisa['path']
            else:
                path = '0'+pesquisa['path']
            
            url_json = 'https://landsat-stac.s3.amazonaws.com/landsat-8-l1/' + path + '/' + row + '/' + pesquisa['acquisitionDate'][0:10] + "/" + pesquisa['entityId'][:-5] + '.json'
            self.url.append(url_json)

        
        def json(self):
            url = self.url[0]
            self.link_json = requests.get(url)
            self.arquivo_json = self.link_json.json()

            return self.arquivo_json

    class acoes:
        def __init__(self):

            return
        
        
        def tiff(self, url):
            with open("imagem-satelite.tiff", 'wb') as imagem:
                resposta = requests.get(url, stream=True)
                if not resposta.ok:
                    print("Ocorreu um erro, status:" , resposta.status_code)
                else:
                    for dado in resposta.iter_content(1024):
                        if not dado:
                            break

                        imagem.write(dado)


        def bandas_landsat(self, url, endereco):    # requisição do servidor
            resposta = requests.get(url)
            if resposta.status_code == requests.codes.OK:  # verifica se esta ok para acessar 
                with open(endereco, 'wb') as novo_arquivo:
                    novo_arquivo.write(resposta.content)
                print("Download finalizado. Salvo em: {}".format(endereco))
            else:
                resposta.raise_for_status()   



        def bandas_cbers(self):
            # Separando a imagem em 3 bandas e salvando
            img = cv2.imread("imagem-satelite.tiff")
            (canalAzul, canalVerde, canalVermelho) = cv2.split(img)
            zeros = np.zeros(img.shape[:2], dtype = "uint8")



            #Salvando imagems fragmentadas em bandas RGB
            cv2.imwrite("Banda_4_vermelho.tiff", cv2.merge([zeros, zeros, canalVermelho]))
            cv2.imwrite("Banda_3_verde.tiff", cv2.merge([zeros, canalVerde, zeros]))
            cv2.imwrite("Banda_2_azul.tiff", cv2.merge([canalAzul, zeros, zeros]))

            
            # Abrindo uma pasta .zip, armazenando e fechando
            z = zipfile.ZipFile('satelite.zip', 'w', zipfile.ZIP_DEFLATED)
            z.write("Banda_4_vermelho.tiff")
            z.write("Banda_3_verde.tiff")
            z.write("Banda_2_azul.tiff")
            z.close()
                          

            
            
            
            return 
    
    reqts = request.args.get('acao')
    satelite = request.args.get('satelite')
    #Escolhe um dos resultados
    data = request.args.get('data')
    nuvem = request.args.get('nuvem')
    arquivo_json = json.loads(json_file[0])

    stac = stac()
    acoes = acoes()

    if satelite == 'CBERS':
        pesquisa = arquivo_json[data]
        stac.stac_cbers(pesquisa)
    else:
        pesquisa = arquivo_json[data + " " + str(nuvem)]
        stac.stac_landsat(pesquisa)
        
        

    if reqts == 'Download':
        arquivo_json = stac.json()
        img_jpg_url = arquivo_json['assets']['thumbnail']['href']
        acoes.tiff(img_jpg_url)
        retorna = "Download Completo!"
    if reqts == 'Mapa':
        retorna = stac.json()
    if reqts == 'Bandas' and satelite == 'Landsat':
        arquivo_json = stac.json()
        i = 1
        while i <= 11:
            banda = 'B' + str(i)
            link = arquivo_json['assets'][banda]['href']
            nome = 'Landasat' + banda + '.tif'
            acoes.bandas_landsat(link, nome)
            i = i + 1
        retorna = "Download Completo!"
    if reqts == 'Bandas' and satelite == 'CBERS':
        acoes.bandas_cbers()
    

    return retorna





if __name__ == '__main__':
    # run app in debug mode on port 5000
    app.run(debug=True, port=5000)