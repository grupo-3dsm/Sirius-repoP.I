import styled from "styled-components";

export const Button = styled.button`
    width: 170px;
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