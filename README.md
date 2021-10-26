[![Generic badge](https://img.shields.io/badge/STATUS%20DO%20PROJETO-EM%20DESENVOLVIMENTO-yellow)](https://shields.io/)

<br id="topo">
<h1 align = "center"> FATEC Profº Jessen Vidal, SJC - 2º Semestre DSM </h1>
<p align = "center">
<img src = "https://github.com/grupo-3dsm/repo_pi/blob/master/assets/img/fatec-logo.png" width = "140px" height = "70px">
<h1 text align="center">Sirius </h1>
<p align = "center">
    <a href="#sobre"> Sobre </a> | 
    <a href="#backlog"> Backlog </a> | 
    <a href="#user-stories"> User Stories </a> | 
    <a href="#prototipo"> Protótipo </a> | 
    <a href="#cronograma"> Cronograma de Entregas </a> |
    <a href="#tecnologias"> Tecnologias </a> |
    <a href="#equipe"> Equipe </a> 
</p>
   

<span id = "sobre">

## :computer: Sobre o projeto 

Desenvolvimento de um portal web com interface de mapa, baseado em serviços de computação em nuvem utilizando tiles, que acessa imagens públicas de satélites e permita consultar, manipular e proporcionar download de imagens para seu usuário, entregando de maneira incremental valor ao cliente durante 4 sprints.
Projeto tem por base a metodologia ágil SCRUM, em que desenvolve Proatividade, Autonomia, Colaboração e Entrega de Resultados dos envolvidos.
  
  
### 🛰️ Entregas de Sprints
Entregas serão realizadas nas datas:

**Sprint**  | **Entrega** | **Status**         | **Link**
:---------: | :------:    | :-------:          | :-------:
01          | 19/09/2021  | [![Generic badge](https://img.shields.io/badge/CONCLUÍDO-green)](https://shields.io/) | [Acessar](https://github.com/grupo-3dsm/Sirius-repoP.I/tree/sprint-1) |
02          | 10/10/2021  | [![Generic badge](https://img.shields.io/badge/CONCLUÍDO-green)](https://shields.io/)  | [Acessar](https://github.com/grupo-3dsm/Sirius-repoP.I/tree/sprint-2)
03          | 07/11/2021  | [![Generic badge](https://img.shields.io/badge/EM%20DESENVOLVIMENTO-yellow)](https://shields.io/)  | Acessar
04          | 05/12/2021  | [![Generic badge](https://img.shields.io/badge/PENDENTE-red)](https://shields.io/)  | Acessar
  
  
→ [Voltar ao topo](#topo)
  
<span id="backlog">
  
## 🌎 Backlog do Produto
  
<img src = "https://github.com/grupo-3dsm/Sirius-repoP.I/blob/main/Imagens/Produto-Backlog.png">
  
<span id = "user-stories">

## User Stories

Informações informais sobre as funções do sistema 
      
**Aplicabilidade** |           **Quem**       |               **O que?**                                                        |    **Como?**                                 |
:------------:     | :----------------------  | :---------------------------------------------------------------------------    | :----------------------------------          |
| Obrigatório      | Como usuário quero       | Buscar por imagens de forma específica                                          | Com um filtro de pesquisa no portal web      |
| Opcional        | Como usuário quero       | Realizar login na plaraforma                                                    | Através da autentificação via e-mail e senha |
| Opcional        | Como usuário quero       | Poder ajusta o brilho, realce de contraste e transparência do mapa              | Com uma ferramenta de manipulação de imagem  |
| Opcional        | Como usuário quero       | Conseguir comparar uma área em diferentes períodos                              | Utilizando uma ferramenta de linha de tempo  |
| Obrigatório      | Como usuário quero       | Poder salvar alguma imagem em meu computador                                    | Através de uma ferramenta de download        |
| Obrigatório      | Como usuário quero       | Conseguir movimentar a imagem em todas as direções                              | Com uma ferramenta de movimentação pan       |
| Obrigatório      | Como usuário quero       | Estar habilitado a aproximar e distanciar as imagens                            | Utilizando uma ferramente de zoom in e out   |
| Obrigatório      | Como administrador quero | Disponibilizar as imagens de satélite e geoprocessamento numa interface de mapa | Através de basemaps para mapa e imagens de satélite |
| Obrigatório      | Como administrador quero | Encontrar imagens a serem expostas no portal web                                | Consultando os repositórios públicos em nuvem dos satélites escolhidos |
| Opcional        | Como administrador quero | Restringir a entrada na plataforma apenas para pessoas permitidas               | Com a autenticação de login através do e-mail e senha |
| Obrigatório      | Como administrador quero | Exibir imagens com boa qualidade e rapidez na renderização                      | Através da utilização de web tiles dinâmicos |
| Obrigatório      | Como administrador quero | Exibir imagens com boa colocaração e definição                                  | Utilizando um tratamento de imagem com cores naturais e realçadas |
| Opcional        | Como administrador quero | Permitir que os usuários possam ver as imagens além da forma padrão             | Oferecendo opções de visualização de imagem (colorida falsa-cor e NDVI) |
  
→ [Voltar ao topo](#topo)
  
<span id="wireframe">

## 🖊️ Wireframe

Página Inicial:
    
![](https://github.com/grupo-3dsm/Sirius-repoP.I/blob/main/Imagens/Produto-Wireframe-PagInicial.png)
    
Aba de filtros para busca:
    
![](https://github.com/grupo-3dsm/Sirius-repoP.I/blob/main/Imagens/Produto-Wireframe-FiltragemBusca.png)
    
Aba de filtros para imagens:
    
![](https://github.com/grupo-3dsm/Sirius-repoP.I/blob/main/Imagens/Produto-Wireframe-FiltrosImagem.png)
    
<span id = "prototipo">
  
## :desktop_computer: Protótipo

Para o Projeto foi desenvolvido um Protótipo, através de um Wireframe/Mockup, validado com o cliente:

<img src="https://github.com/grupo-3dsm/Sirius-repoP.I/blob/main/Imagens/Produto-Prototipo.gif">
  
→ [Voltar ao topo](#topo)
  
<span id = "cronograma">
    
## 📅 Cronograma de Entregas

<img src="https://github.com/grupo-3dsm/Sirius-repoP.I/blob/main/Imagens/Produto-CronogramaDeEntregas.png">
  
→ [Voltar ao topo](#topo)
  
<span id = "tecnologias">
 
##  🛠️ Tecnologias
  

As seguintes ferramentas, linguagens, bibliotecas e tecnologias foram usadas na construção do projeto até o momento:
  
- [Figma](http://www.figma.com): Prototipagem
- [React](https://pt-br.reactjs.org/docs/getting-started.html): Front-end (estrutura das páginas, estilização e interações do site)
- [Python](https://www.python.org/): Back-end (aplicações internas para o apoio das ações do usuário)
- [Jupyter Notebook](https://jupyter.org/): Análise de dados
- [NumPy](https://numpy.org/doc/stable/): Análise de dados
- [Openvc](https://opencv.org/): Processamento de imagens
- [Amazon Web Services - AWS](https://aws.amazon.com/pt/): Local onde estão armazenadas as informações dos satélites
- [JSON](https://www.json.org/json-en.html): Leitura e manipulação dos dados dos satélites
- [SpatioTemporal Asset Catalogs - STAC](https://stacspec.org/): API e Catálago para as imagens dos satélites
- [Leafmap](https://leafmap.org/): Plotagem de mapas em Python
- [Leaflet](https://leafletjs.com/): Plotagem de mapas em Javascript
- [TypeScript](https://www.typescriptlang.org/): Estruturação
- [Node.js](https://nodejs.org/en/): Servidor 
- [Visual Studio Code](https://code.visualstudio.com/): Codificação
- [Discord](https://discord.com/): Comunicação
- [GitHub](https://github.com/): Versionamento
- [Trello](https://trello.com/pt-BR): Organização e acompanhamento das tarefas
- [Planilhas Google](https://www.google.com/sheets/about/): Acompanhamento do gráfico de burndown e do desenvolvimento das atividades
- Portable Document Format - PDF: Documentação

→ [Voltar ao topo](#topo)
  
<span id="equipe">
  
## 👥 Equipe
|    Função     | Nome                        |                LinkedIn                                                |                     GitHub                   |
| :----------:  | :-----------------------    | :----------------------------------------------------:                 | :------------------------------------------: |
| Scrum Master  | Vinicius Buarque de Gusmão Catonho | [LinkedIn](https://www.linkedin.com/in/vinicius-buarque-de-gusm%C3%A3o-catonho-9b11911a7/) | [GitHub](https://github.com/vbuarque) |
| Product Owner | Isabelle Dias Ribeiro Silva | [LinkedIn](https://www.linkedin.com/in/drisabelles)                    | [GitHub](https://github.com/drisabelles)     |
|   Dev Team    | Ana Carolina dos Santos     | [LinkedIn](https://www.linkedin.com/in/ana-santos-856436145/)          | [GitHub](https://github.com/annakks)         |
|   Dev Team    | Gabriele Gonçalves Vieira   | [LinkedIn](https://www.linkedin.com/mwlite/in/gabrielevieira)          | [GitHub](https://github.com/GabrieleGVieira) |
|   Dev Team    | Nathan da Motta Truyts      | [LinkedIn](https://www.linkedin.com/in/nathan-truyts-43737020a/)       | [GitHub](https://github.com/Nathtruyts)      |

→ [Voltar ao topo](#topo)
