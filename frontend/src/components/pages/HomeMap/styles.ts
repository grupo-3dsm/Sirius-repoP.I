import styled from "styled-components";
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    width: 112px;
`;
export const ContainerBtnUser = styled.div`
    z-index: 2;
    position:relative;
    margin: 40px 0px 200px 40px;
`;

export const ContainerBtnConfig = styled.div`
    z-index: 2;
    position:relative;
    margin: 0px 0px 40px 40px;
`;

export const ContainerBtnDown = styled.div`
    z-index: 2;
    position:relative;
    margin: 0px 0px 40px 40px;
`;


export const BtnConfig = styled.button`
    background :none;
    color: #DC851F;
    font-size: 20px;
        &:hover{
            color: #000000;
            transition-duration: 225ms;
            cursor: pointer;
    }   
`;

export const BtnDownload = styled.button`
    background :none;
    color: #DC851F;
    font-size: 20px;
        &:hover{
            color: #000000;
            transition-duration: 225ms;
            cursor: pointer;
    }
`;

export const BtnUser = styled.button`
    background :none;
    color: #DC851F;
    font-size: 20px;
        &:hover{
            color: #000000;
            transition-duration: 225ms;
            cursor: pointer;
    }
`;
