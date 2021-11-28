import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { Button } from "./styles";

import "./styles.css";
import { Component } from "react";

export default class MenuLogout extends Component {
  render() {
    return (
      <div className="container">
          <div className="closeIcon">
            <Link to="/">
              <FontAwesomeIcon icon={faTimes} size="2x" />
            </Link>
          </div>
            <Link to="/">
              <Button>Sair</Button>
            </Link>
      </div>
    );
  }
}
