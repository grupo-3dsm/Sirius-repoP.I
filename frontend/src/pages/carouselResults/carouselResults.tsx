import { Component } from "react";
import Carousel from "react-elastic-carousel";
import { Item, Line, Button, ButtonView, ButtonClose } from "./styles";
import "./styles.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faDownload } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

export default class CarouselSat extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <header className="headerContent">
            <div className="closeBtn">
              <Link to='/map'>
                <ButtonClose>
                  <FontAwesomeIcon icon={faTimes} size="1x" />
                </ButtonClose>
              </Link>
            </div>
            <div className="headerTitle">
              <h2>Resultados</h2>
            </div>
          </header>
        </div>
        <div className="App">
          <Carousel breakPoints={breakPoints}>
            <Item>
              <header className="header">
                <p>LANDSAT_WPM_L4_DN</p>
                <div className="containerBtn">
                  <Button>
                    <FontAwesomeIcon icon={faDownload} size="1x" />
                  </Button>
                </div>
              </header>
              <Line></Line>
              <div className="containerImg">
                <img
                  src="https://i1.wp.com/earthobservatory.nasa.gov/blogs/elegantfigures/files/2013/10/00_mtjefferson_oli_2013225_crop.jpg"
                  alt="imagem de satélite"
                  width="118px"
                  height="120px"
                />
              </div>
              <div className="containerBtnImg">
                <ButtonView>
                  <p>Visualizar imagem</p>
                </ButtonView>
              </div>
            </Item>
            <Item>
              <header className="header">
                <p>LANDSAT_WPM_L4_DN</p>
                <div className="containerBtn">
                  <Button>
                    <FontAwesomeIcon icon={faDownload} size="1x" />
                  </Button>
                </div>
              </header>
              <Line></Line>
              <div className="containerImg">
                <img
                  src="https://i1.wp.com/earthobservatory.nasa.gov/blogs/elegantfigures/files/2013/10/00_mtjefferson_oli_2013225_crop.jpg"
                  alt="imagem de satélite"
                  width="118px"
                  height="120px"
                />
              </div>
              <div className="containerBtnImg">
                <ButtonView>
                  <p>Visualizar imagem</p>
                </ButtonView>
              </div>
            </Item>
            <Item>
              <header className="header">
                <p>LANDSAT_WPM_L4_DN</p>
                <div className="containerBtn">
                  <Button>
                    <FontAwesomeIcon icon={faDownload} size="1x" />
                  </Button>
                </div>
              </header>
              <Line></Line>
              <div className="containerImg">
                <img
                  src="https://i1.wp.com/earthobservatory.nasa.gov/blogs/elegantfigures/files/2013/10/00_mtjefferson_oli_2013225_crop.jpg"
                  alt="imagem de satélite"
                  width="118px"
                  height="120px"
                />
              </div>
              <div className="containerBtnImg">
                <ButtonView>
                  <p>Visualizar imagem</p>
                </ButtonView>
              </div>
            </Item>
            <Item>
              <header className="header">
                <p>LANDSAT_WPM_L4_DN</p>
                <div className="containerBtn">
                  <Button>
                    <FontAwesomeIcon icon={faDownload} size="1x" />
                  </Button>
                </div>
              </header>
              <Line></Line>
              <div className="containerImg">
                <img
                  src="https://i1.wp.com/earthobservatory.nasa.gov/blogs/elegantfigures/files/2013/10/00_mtjefferson_oli_2013225_crop.jpg"
                  alt="imagem de satélite"
                  width="118px"
                  height="120px"
                />
              </div>
              <div className="containerBtnImg">
                <ButtonView>
                  <p>Visualizar imagem</p>
                </ButtonView>
              </div>
            </Item>
            <Item>
              <header className="header">
                <p>LANDSAT_WPM_L4_DN</p>
                <div className="containerBtn">
                  <Button>
                    <FontAwesomeIcon icon={faDownload} size="1x" />
                  </Button>
                </div>
              </header>
              <Line></Line>
              <div className="containerImg">
                <img
                  src="https://i1.wp.com/earthobservatory.nasa.gov/blogs/elegantfigures/files/2013/10/00_mtjefferson_oli_2013225_crop.jpg"
                  alt="imagem de satélite"
                  width="118px"
                  height="120px"
                />
              </div>
              <div className="containerBtnImg">
                <ButtonView>
                  <p>Visualizar imagem</p>
                </ButtonView>
              </div>
            </Item>
            <Item>
              <header className="header">
                <p>LANDSAT_WPM_L4_DN</p>
                <div className="containerBtn">
                  <Button>
                    <FontAwesomeIcon icon={faDownload} size="1x" />
                  </Button>
                </div>
              </header>
              <Line></Line>
              <div className="containerImg">
                <img
                  src="https://i1.wp.com/earthobservatory.nasa.gov/blogs/elegantfigures/files/2013/10/00_mtjefferson_oli_2013225_crop.jpg"
                  alt="imagem de satélite"
                  width="118px"
                  height="120px"
                />
              </div>
              <div className="containerBtnImg">
                <ButtonView>
                  <p>Visualizar imagem</p>
                </ButtonView>
              </div>
            </Item>
            <Item>
              <header className="header">
                <p>LANDSAT_WPM_L4_DN</p>
                <div className="containerBtn">
                  <Button>
                    <FontAwesomeIcon icon={faDownload} size="1x" />
                  </Button>
                </div>
              </header>
              <Line></Line>
              <div className="containerImg">
                <img
                  src="https://i1.wp.com/earthobservatory.nasa.gov/blogs/elegantfigures/files/2013/10/00_mtjefferson_oli_2013225_crop.jpg"
                  alt="imagem de satélite"
                  width="118px"
                  height="120px"
                />
              </div>
              <div className="containerBtnImg">
                <ButtonView>
                  <p>Visualizar imagem</p>
                </ButtonView>
              </div>
            </Item>
            <Item>
              <header className="header">
                <p>LANDSAT_WPM_L4_DN</p>
                <div className="containerBtn">
                  <Button>
                    <FontAwesomeIcon icon={faDownload} size="1x" />
                  </Button>
                </div>
              </header>
              <Line></Line>
              <div className="containerImg">
                <img
                  src="https://i1.wp.com/earthobservatory.nasa.gov/blogs/elegantfigures/files/2013/10/00_mtjefferson_oli_2013225_crop.jpg"
                  alt="imagem de satélite"
                  width="118px"
                  height="120px"
                />
              </div>
              <div className="containerBtnImg">
                <ButtonView>
                  <p>Visualizar imagem</p>
                </ButtonView>
              </div>
            </Item>
          </Carousel>
        </div>
      </div>
    );
  }
}
