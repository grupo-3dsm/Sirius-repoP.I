import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ContainerInput,
  ContainerLeft,
  Text,
  Input,
  ContainerBtn,
  BtnShow,
  BtnContainer,
  Button,
  TextBtnContainer,
  TextBtn,
  BtnRegister,
  Title,
  SubTitle,
  ContainerTitle,
} from "./styles";
/*Font Awesome Icons*/
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const UserLogin = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <ContainerTitle>
        <Title>Login</Title>
        <SubTitle>Por favor entre com sua conta !</SubTitle>
      </ContainerTitle>
      <ContainerInput>
        <ContainerLeft>
          <Text>Email</Text>
          <Input placeholder="Seu email..." />
        </ContainerLeft>
        <ContainerLeft>
          <Text>Senha</Text>
          <Input
            placeholder="Entre com sua senha..."
            type={show ? "text" : "password"}
          />
        </ContainerLeft>
        <ContainerBtn>
          <BtnShow onClick={() => setShow(!show)}>
            {show ? (
              <FontAwesomeIcon icon={faEye} size="lg" />
            ) : (
              <FontAwesomeIcon icon={faEyeSlash} size="lg" />
            )}
          </BtnShow>
        </ContainerBtn>
      </ContainerInput>
      <BtnContainer>
        <Link to="/map">
          <Button>Login</Button>
        </Link>
        <TextBtnContainer>
          <TextBtn>Não possui conta ? </TextBtn>
          <Link to="/register">
            <BtnRegister>Cadastre-se</BtnRegister>
          </Link>
        </TextBtnContainer>
      </BtnContainer>
    </div>
  );
};

export default UserLogin;
