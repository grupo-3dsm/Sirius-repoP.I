<br id="topo">
<h1 align="center"> Sprint 1: 30/08/2021 a 19/09/2021 </h1>
<p align="center"> 
    <a href="#objetivos">Objetivos da Sprint</a> |
    <a href="#wireframe">Wireframe</a> | 
    <a href="#prototipo">Protótipo</a> | 
    <a href="#org">Organização da Equipe</a> | 
    <a href="#repo">Organização do Repositório</a> 
    <a href="#entregas">Entregas</a> 
 </p>
 
<span id="objetivo">

## 🎯 Objetivo

1. Refinamento dos requisitos, para viabilizar o Mínimo Produto Viável - MVP:

2. Organização da equipe e planejamento de processos;

- [x] Criar uma página navegável (no estilo Google Maps);
- [x] Utilizar uma biblioteca pronta (Leafleat) para exibir um basemap;
- [x] Carregar a imagem de satélite;
- [x] A imagem de satélite não terá tile, apenas o basemap (tile original do Leaflet);
- [x] Acessar imagens do satélite de repositório local;
- [x] Utilizar apenas imagens de 1 satélite;
- [x] Foto de São José dos Campos.

3. Confecção do wireframe, um rascunho do protótipo;

4. Organização da Equipe

5. Desenvolvimento do protótipo.
 
→ [Voltar ao topo](#topo)

<span id="mvp">

## 🛴 MVP - Mínimo Produto Viável

<p>O que vamos entregar?</p>

Interface, Font-End, onde a partir dela é possível realizada a busca de uma imagem da áreas desejadas, através de um Basemap (Leafleat).
Separadamente entregaremos o back-end que contém um código no qual mostra a possibilidade de consultar e buscar imagens existentes do satélite CBERS4 e realizar download simples em formato .tiff, download das bandas separadas ou download da imagem com contraste e brilho aplicado.
    
<span id="backlog">

## 🌎 Backlog

![](https://github.com/grupo-3dsm/Sirius-repoP.I/blob/sprint-1/Imagens/Sprint1-Backlog.png)

<span id="wireframe">

## 🖊️ Wireframe

![](https://github.com/grupo-3dsm/Sirius-repoP.I/blob/sprint-1/Imagens/Sprint1-Wireframe-A.png)
![](https://github.com/grupo-3dsm/Sirius-repoP.I/blob/sprint-1/Imagens/Sprint1-Wireframe-B.png)

<span id="prototipo">

## :desktop_computer: Protótipo

<img src="https://github.com/grupo-3dsm/Sirius-repoP.I/blob/sprint-1/Imagens/Sprint1-Prototipo.gif">

<span id="org">

## 🗃️ Organização da Equipe

Depois de refinar os requisitos e definir as tarefas, assim como as ferramentas e tecnologias que seriam usadas, cada componente a equipe ficou responsável por determinadas
tarefas que corresponde a requisitos do Backlog da Sprint e consequentemente ao Backlog do Produto, sendo a comunicação atras de reuniões on-line e Daily Meeting diários.
Deste modo a equipe se organizou para entrega de uma Interface com busca de uma imagem das áreas desejadas, através de um Basemap (Leafleat) e back-end, 
através da ferramenta Jupyter Notebook, que contém um código no qual mostra a possibilidade de consultar e buscar imagens existentes e realizar download simples.

![](https://github.com/grupo-3dsm/Sirius-repoP.I/blob/sprint-1/Imagens/Sprint1-Burndown-A.png)

![](https://github.com/grupo-3dsm/Sirius-repoP.I/blob/sprint-1/Imagens/Sprint1-Burndown-B.png)

<span id="repo">

## :file_folder: Organização do Repositórios 

Os arquivos desta Sprint estão alocados em um único arquivo, contendo tanto a Interface e os códigos no Jupyter Notebook.
### 📁 <a href="https://github.com/grupo-3dsm/Sirius-repoP.I/tree/sprint-1/projeto">/projeto</a>:
    
    
    
<span id="entregas">

## :white_check_mark: Entregas
    
### Front-end

- [x] 005 - Interface Web: Funcionalidade de Controle da Imagem 
     
  O uso do leaflet permite que o mapas gerados sejam interativos, possibilitando afastar, dimunuir e mover o mapa para qualquer parte, além de possibilitar a visualização em tela cheia se desejado. Todas essas funções ja vem prontas com o uso da biblioteca e já implementada na aplicação web.
  
  Abaixo uma demonstração desse requisito: (Obs: A api do google foi usada apenas para demonstração nessa sprint)
    
  ![](https://github.com/grupo-3dsm/Sirius-repoP.I/blob/sprint-1/Imagens/Sprint1-Frontgif1.gif)
    
- [x] 012 - Interface Web: Filtrar e Buscar a Imagem no Portal Web
    
 Ainda se ultilizando da biblioteca do leaflet, a aplicação web pode carregar diferentes imagens e filtros, carregando na aplicação. A funcionalidade ja possui um código estruturado, porém, não está completamente concluída e será finalizada erá finalizada nas próximas sprints. Será será inserido a ferramenta para seleção de filtros, locais para seleção do satélite, e ferramenta para download.  
 Cumprindo com os requisitos da sprint, todo o front-end foi construído ultilizando a linguagens typescript, react e a biblioteca do leaflet, focando em um interface limpa e responsiva, além de facilitar a busca pelos filtros.  
    
 Segue abaixo uma demonstração do funcionamento da função:
     
  ![](https://github.com/grupo-3dsm/Sirius-repoP.I/blob/sprint-1/Imagens/Sprint1-Frontgif2.gif)  
  
  Como visualizar o Front-end  
    
  Para vizualizar o arquivo principal do front-end, carregue a pasta [frontend](https://github.com/grupo-3dsm/Sirius-repoP.I/tree/sprint-1/projeto/Frontend) em seu terminal e dê um Npm start. OBS:(Em alguns computadores o botão de zoom pode não responder, leia o README antes do npm start). 
  A pasta [Frontend-demo](https://github.com/grupo-3dsm/Sirius-repoP.I/tree/sprint-1/projeto/Frontend), possui uma versão inicial do mapa do leaflet para visualização em HTML. 
    
### Back-end
    
- [x] 001 - Obtenção de Imagem: Consultar as imagens dos satélites
    
Nessa sprint foi realizado o acesso ao reposítorio AWS do satélite CBERS4 e realizando busca com os filtros de período de aquisição da imagem e a área de interesse. Adiante será aplicado o filtro de cobertura de nuvens.
    
- [x] 002 - Obtenção de Imagem: Disponibilizar a imagem para o portal web
 
Como o sistema back-end e front-end ainda estão sendo entregues separados, não de modo interligado, a imagem ainda não será visualizada no portal web. Porém, ela já está disponível para visualização através do back-end.

 - [x] 006 - Processamento de Imagem: Coloração da Imagem
    
Foi inserido a funcionalidade de aplicar Contraste e Brilho nas imagens. Por enquanto está sendo entregue com valores fixos, porém nas próximas sprints será possível o próprio utilizados aplicar.
    
- [x] 009 - Estrutura Web: Permitir Download de Imagens
    
É possível fazer o download da imagem em formato .tiff com todas as bandas juntas, fazer o download da imagem com brilho e contraste aplicado, e download das bandas separadas.
    
 Segue abaixo exemplos do back-end en funcionamento:
    
###### Parâmetros utilizados:
- Câmera: MUX
- Data de inicio: 2020-09-01
- Data de fim: 2020-09-31
- Latitude: -23.1791
- Longitude: -45.8872
    
A latitude e longitude busca as imagens da região da cidade de São José dos Campos.
    
> A imagens apresentadas estão em formato JPG por conta do tamanho, mas o download é feito em formato .tiff
    
###### Imagem com todas as bandas juntas: </b>
    
![](https://github.com/grupo-3dsm/Sirius-repoP.I/blob/sprint-1/Imagens/Sprint1-imagem-satelite.jpg)
    
###### Bandas separadas </b>

<img src="https://github.com/grupo-3dsm/Sirius-repoP.I/blob/sprint-1/Imagens/Sprint1-banda2-azul.jpg" width="300"/> <img src="https://github.com/grupo-3dsm/Sirius-repoP.I/blob/sprint-1/Imagens/Sprint1-banda3-verde.jpg" width="300"/> <img src="https://github.com/grupo-3dsm/Sirius-repoP.I/blob/sprint-1/Imagens/Sprint1-banda4-vermelho.jpg" width="300"/>  
    
###### Imagem com contraste e brilho aplicados
        
![](https://github.com/grupo-3dsm/Sirius-repoP.I/blob/sprint-1/Imagens/Sprint1-brilho-contraste.jpg)
        
###### Mapa com demarcação da área
> Essa funcionalidade está apenas disponível para visualização através do Jupyter Notebook, será uma das incrementações que na verdade serão visualizadas através do Front-end.

![](https://github.com/grupo-3dsm/Sirius-repoP.I/blob/sprint-1/Imagens/Sprint1-Mapa.jpg)
        
######  Gif com a busca sendo realizada:
        
![](https://github.com/grupo-3dsm/Sirius-repoP.I/blob/sprint-1/Imagens/Sprint1-ferramenta-busca.gif)
    
        
É possível acessar o back-end de duas maneiras, através do arquivo em formato Jupyter Notebook, podendo ser acessado [aqui](https://github.com/grupo-3dsm/Sirius-repoP.I/blob/sprint-1/projeto/BACKEND-API.ipynb) ou através de um buscador em python, encontrado [aqui](https://github.com/grupo-3dsm/Sirius-repoP.I/blob/sprint-1/projeto/ferramenta-busca-CBERS4.py), onde já será possível interagir, realizando a busca e o download das imagens.
        
###### Para baixar e acessar o buscador, siga os passos abaixo:
        
1 - Requisitos
    
- É necessário ter o Python instalado no computador (versão 3.8 ou superior recomendado)
- Instalar bibliotecas encontradas no arquivo requirements.txt. Pode ser encontrado [aqui](https://github.com/grupo-3dsm/Sirius-repoP.I/blob/sprint-1/projeto/requirements.txt)
  
2 - Utilização

- Baixe o [arquivo com formato python](https://github.com/grupo-3dsm/Sirius-repoP.I/blob/sprint-1/projeto/ferramenta-busca-CBERS4.py)
- Verifique se os requisitos descritos no 1 estão ok
- Acesse dando 2 clicks para executar
 
3 - Inserir parâmetros
O programa irá pedir alguns parâmetros para busca e é importante seguir o padrão para bom funcionamento.
    
###### "Digite qual câmera você deseja:"
    
As câmeras do CBERS4 são: AWFI, MUX, PAN10M e PAN5M
    
:warning: Mantenha as letras de forma maiúscula
    
###### "Digite uma data de inicio" e "Digite uma data de fim"
    
 O formato das datas deve ser: aaaa-mm-dd
    
 Exemplo: 2020-09-19
 
###### "Digite a latitude" e "Digite a longitude"
    
Mantenha o . como padrão para as coordenadas
    
Exemplo: -23.1791

###### "Qual das datas você deseja consultar? Digite aqui:"
    
O programa irá te retornar todas as datas encontradas no período de busca solicitado, basta escolher uma e inserir.
    
:warning: Reforçando o formato da data é: aaaa-mm-dd
    
Nas perguntas seguintes basta apenas responder com "S" ou "N",em formato maiúsculo, de acordo com o que você deseja realizar.


    
    
