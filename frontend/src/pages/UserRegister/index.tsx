import { useState } from 'react';
import { Link } from 'react-router-dom';
import { TextInput, Input, Container, ContainerLeft, Button, TextBtn, BtnLogin, BtnContainer, TextBtnContainer, BtnShow, ContainerBtnShow, ContainerBtnShow2, RegisterText, BackBtn} from './styles';
/*Font Awesome Icons*/
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash, faChevronLeft } from '@fortawesome/free-solid-svg-icons'

const UserRegister = () => {
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);

    return(
        <div>
            <RegisterText>Cadastro</RegisterText>
            <Link to="/">
                <BackBtn>
                    <FontAwesomeIcon icon={faChevronLeft} size="lg"/>
                </BackBtn>
            </Link>
            <Container>
               <ContainerLeft>
                    <TextInput>Nome</TextInput>
                    <Input placeholder="Fulano da Silva..."/>
                </ContainerLeft>
                <ContainerLeft>
                    <TextInput>Email</TextInput>
                    <Input placeholder="email@email.com"/>
                </ContainerLeft>

                <ContainerLeft>
                    <TextInput>Senha</TextInput>
                    <Input type={show ? "text" : "password"} placeholder="Escolha uma senha forte..."/>
                </ContainerLeft>
                <ContainerBtnShow>
                    <BtnShow onClick={() => setShow(!show)}>{show ? <FontAwesomeIcon icon={faEye} size="lg"/> : <FontAwesomeIcon icon={faEyeSlash} size="lg"/>}</BtnShow>
                </ContainerBtnShow>
                <ContainerLeft>
                    <TextInput>Confirme sua senha</TextInput>
                    <Input type={show2 ? "text" : "password"} placeholder="Confirme sua senha..."/>
                </ContainerLeft>
                <ContainerBtnShow2>
                    <BtnShow onClick={() => setShow2(!show2)}>{show2 ? <FontAwesomeIcon icon={faEye} size="lg" /> : <FontAwesomeIcon icon={faEyeSlash} size="lg"/>}</BtnShow>
                </ContainerBtnShow2>
            </Container>
            <BtnContainer>
                <Button>Cadastrar</Button>
                <TextBtnContainer>
                    <TextBtn>Já possui conta ? </TextBtn>
                    <Link to="/">
                    <BtnLogin>Login</BtnLogin>
                    </Link>
                </TextBtnContainer>
            </BtnContainer>
        </div>
    );
}   

export default UserRegister;
