import styled from "styled-components";

/*INPUTS*/
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 245px;
`;

export const ContainerLeft = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

export const Input = styled.input`
    margin: 5px 0px 20px 0px;
    padding: 24px;
    width: 324px;
    height: 25px;

    background-color: rgba(0, 0, 0, 0.25);
    color: #ffffff;
    font-size: 20px;
   
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5);
    border-radius: 30px;
    border: 1px solid #d98d1a;
    
    &::placeholder {
        color: rgba(255, 255, 255, 0.25);
        font-size: 20px;
    }
`;

export const TextInput = styled.text`
    font-size: 24px;
    color: #ffffff;
    margin-left: 24px;
`;

/*BUTTON CADASTRAR/LOGIN E TEXTO*/

export const BtnContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    margin-top: 30px;
`;

export const TextBtnContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-top:20px;
`;

export const Button = styled.button`
    width: 285px;
    height: 50px;

    font-size: 18px;
    color: #ffffff;
    
    background-color: #000000;

    border-radius: 18px;
    border: 1px solid #DC851F;

    box-shadow: 0px 4px 4px rgba(0,0,0,0.25);

    &:hover {
        border-color: #ffffff;
        transition-duration: 250ms;
        cursor: pointer;
        box-shadow: 0px 0px 1em rgba(255,255,255,0.25);
    }
`;

export const TextBtn = styled.text`
    font-size: 18px;
    color:#ffffff;
`;

export const BtnLogin = styled.button`
    background: none;
    font-size: 18px;
    color: #DC851F;
    font-weight: bold;
    margin-left: 55px;

    &:hover {
        font-size: 20px;
        color: #ffffff;

        transition-duration: 250ms;
        cursor: pointer;
        
    }
`;

export const BtnShow = styled.button`
    background: none;
    color: rgba(255,255,255, 0.25);
`;

export const ContainerBtnShow = styled.div`
    position: relative;
    top:-53px;
    left: 130px;
`;

export const ContainerBtnShow2 = styled.div`
    position: relative;
    top:-53px;
    left: 130px;
`;

/*HEADER TEXT AND BACK BTN*/

export const RegisterText = styled.text`
    font-size: 50px;
    color: #ffffff;

    position: absolute;
    top: 37px;
    left: 100px;
`;

export const BackBtn = styled.button`
    width: 50px;
    height: 50px;

    position: absolute;
    top: 40px;
    left: 25px;

    background: none;
    background-color: rgba(0,0,0,0.25);
    color: #ffffff;

    border-radius: 12px;
    border: 1px solid #DC851F;
    box-shadow: 0px 4px 4px rgba(0,0,0,0.25);

    &:hover {
        border: 1px solid #ffffff;
        cursor: pointer;

        transition-duration: 250ms;

        box-shadow: 0px 0px 1em rgba(255,255,255,0.25);
    }
`;
