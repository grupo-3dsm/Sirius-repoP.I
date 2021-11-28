import { Component } from "react";

import Map from "./Map";
import { Link } from "react-router-dom";
import {
  BtnConfig,
  BtnUser,
  ContainerBtnStyle,
  ContainerBtnConfig,
  ContainerBtnUser,
  Container,
} from "./menuStyles";
/*Font Awesome Icons*/
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserCircle,
  faSearch
} from "@fortawesome/free-solid-svg-icons";

class MapFeatures extends Component {
  render() {
    return (
      <div style={{ position: "relative", display: "flex" }}>
        <Map />
        <Container>
          <ContainerBtnConfig>
            <Link to="/search">
              <BtnConfig>
                <FontAwesomeIcon icon={faSearch} size="2x" />
              </BtnConfig>
            </Link>
          </ContainerBtnConfig>
          <ContainerBtnUser>
            <Link to="/exit">
              <BtnUser>
                <FontAwesomeIcon icon={faUserCircle} size="2x" />
              </BtnUser>
            </Link>
          </ContainerBtnUser>
          <ContainerBtnStyle></ContainerBtnStyle>
        </Container>
      </div>
    );
  }
}

export default MapFeatures;