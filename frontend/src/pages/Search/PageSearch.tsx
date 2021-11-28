import { Component } from "react";
import { Input, InputDate, InputNuvem, ButtonSearch } from "./styles";
import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
export default class SearchPage extends Component {
  render() {
    return (
      <div>
        <div className="exitBtn">
            <Link to="/map">
                <FontAwesomeIcon icon={faTimes} size="2x" />
            </Link>
        </div>
        <div className="container">
          {/*Area de interesse*/}
          <div className="containerHead">
            <header className="titleHeader">
              <h2>Área de interesse</h2>
            </header>
            <div className="subTitle">
              <p>
                Você pode <u>selecionar</u> a área de interesse no mapa
                segurando a tecla <p style={{ color: "#DC851F" }}>SHIFT</p> no
                mapa ou digitando as coordenadas desejadas.
              </p>
            </div>
            <div className="containerContent">
              <Input placeholder="Latitude" />
              <Input placeholder="Longitude" />
            </div>
          </div>
          {/* Fim da Area de interesse*/}

          {/*cobertura de nuvens*/}
          <div className="containerHead">
            <header className="titleHeader">
              <h2>Cobertura de nuvens</h2>
            </header>
            <div className="subTitle">
              <p>Digite a porcentagem de nuvens</p>
            </div>
            <div className="containerContent">
              <InputNuvem placeholder="% de cobertura" />
            </div>
          </div>
          {/* fim da cobertura de nuvens*/}

          {/*periodo*/}
          <div className="containerHead">
            <header className="titleHeader">
              <h2>Periodo</h2>
            </header>
            <div className="containerContent">
              <InputDate type="date" />
              <InputDate type="date" />
            </div>
          </div>
          {/*fim do periodo*/}

          {/*Satelite e camera*/}
          <div className="containerHead">
            <header className="titleHeader">
              <h2>Satéite e Câmera</h2>
            </header>
            <div className="containerContent">
              <div className="checkbox">
                <p className="landsatName">LANDSAT</p>
                <input type="checkbox" />
                <p className="camera">Câmera única</p>
              </div>
            </div>
          </div>
          {/*fim do Satelite e camera*/}
        <div>
          <ButtonSearch>Buscar Imagem</ButtonSearch>
        </div>
        </div>
      </div>
    );
  }
}
