import styled from "styled-components";

export const Item = styled.div`
  height: 250px;
  width: 330px;
  background-color: rgba(0, 0, 0, 0.5);
  color: #ffffff;
  font-size: 20px;
  font-weight: 100;
  border-radius: 20px;
  border: 1px solid #DC851F;
`;

export const Line = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 15px 15px 15px 15px;
  width: 300px;
  height: 1px;
  background-color: #252525;
`;

export const Button = styled.button`
  font-size: 20px;
  background: none;
  color:#DC851F;

  &:hover {
      color: #252525;
        transition-duration: 250ms;
        cursor: pointer;
    }
`;

export const ButtonView = styled.button`
  width: 146px;
  height: 32px;
  background-color: #000000;
  border: 1px solid #DC851F;
  border-radius: 20px;
  cursor: pointer;

  color: #ffffff;
  font-size: 10px;

  
 &:hover {
        border-color: #ffffff;
        transition-duration: 250ms;
        cursor: pointer;
        box-shadow: 0px 0px 1em rgba(255,255,255,0.25);
    }
`;

export const ButtonClose = styled.button`
  background: none;
  font-size: 30px;
  color: #DC851F;
  margin: 25px;
  &:hover {
        color: #000000;
        transition-duration: 250ms;
        cursor: pointer;
    }
`;