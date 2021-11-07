import Map from "./Map";
import { Link } from 'react-router-dom';
import {
  BtnConfig,
  BtnDownload,
  BtnUser,
  ContainerBtnConfig,
  ContainerBtnDown,
  ContainerBtnUser,
  Container
} from "./styles";
/*Font Awesome Icons*/
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCog,
  faDownload,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";

const MapFeatures = () => {
  return (
    <div>
      <Map />


      <Container>
        <ContainerBtnUser>
          <Link to="/">
            <BtnUser>
              <FontAwesomeIcon icon={faUserCircle} size="3x" />
            </BtnUser>
          </Link>
        </ContainerBtnUser>

        <ContainerBtnConfig>
          <BtnConfig>
            <FontAwesomeIcon icon={faCog} size="3x" />
          </BtnConfig>
        </ContainerBtnConfig>
        
        <ContainerBtnDown>
          <BtnDownload>
            <FontAwesomeIcon icon={faDownload} size="3x" />
          </BtnDownload>
        </ContainerBtnDown>

      </Container>
    </div>
  );
};

export default MapFeatures;
