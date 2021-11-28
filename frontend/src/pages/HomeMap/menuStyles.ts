import styled from "styled-components";

export const ContainerBtnStyle = styled.div`
  z-index: 1;
  position: absolute;
  top: 0px;
  right: 0px;
  width: 100px;
  height: 210px;
  border-radius: 0px 0px 0px 20px;
  background: #252525;
  border: 1px solid #dc851f;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  margin-left: 93%;
`;

export const ContainerBtnUser = styled.div`
  z-index: 2;
  position: absolute;
  top: 0px;
  right: 0px;
  margin: 140px 30px 30px 30px;
`;

export const ContainerBtnConfig = styled.div`
  z-index: 2;
  position: absolute;
  top: 0;
  right: 0;
  margin: 30px 30px 150px 30px;
`;

export const BtnConfig = styled.button` 
  background: none;
  color: #dc851f;
  font-size: 20px;
  &:hover {
    color: #000000;
    transition-duration: 225ms;
    cursor: pointer;
  }
`;

export const BtnUser = styled.button`
  background: none;
  color: #dc851f;
  font-size: 20px;
  &:hover {
    color: #000000;
    transition-duration: 225ms;
    cursor: pointer;
  }
`;