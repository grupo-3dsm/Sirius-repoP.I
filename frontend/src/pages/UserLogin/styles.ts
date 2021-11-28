import styled from "styled-components";

export const ContainerTitle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    margin-top: 50px;
`;

export const Title = styled.text`
    font-size: 80px;    
    color: #ffffff;
`;

export const SubTitle = styled.text`
    margin-top: 20px;
    font-size: 25px;
    color: rgba(255,255,255, 0.5);
`;

export const ContainerInput = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 150px;
`;

export const ContainerLeft = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

export const Text = styled.text`
    font-size: 24px;
    color: #ffffff;
    margin-left: 24px;
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

export const ContainerBtn = styled.div`
    position: relative;
    top:-53px;
    left: 130px;
`;

export const BtnShow = styled.button`
    background: none;
    color: rgba(255,255,255, 0.25);
`;

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
    margin-top:40px;
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

export const BtnRegister = styled.button`
    background: none;
    font-size: 18px;
    color: #DC851F;
    font-weight: bold;
    margin-left: 20px;

    &:hover {
        font-size: 20px;
        color: #ffffff;

        transition-duration: 250ms;
        cursor: pointer;
    }
`;

