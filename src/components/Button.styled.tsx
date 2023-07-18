import styled, {css} from "styled-components";
import {MyAnimation} from "./styles/animations/Aniomations";

type StyledBtnPropsType = {
    color?: string
    fontSize?: string
    primary?: boolean
    outlined?: boolean
}

export const StyledBtn = styled.button<StyledBtnPropsType>`
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  color: snow;
  //font-size: 2rem;
  font-size: ${props => props.fontSize || "2rem"};
  font-weight: bold;
  
  ${props => props.outlined && css<StyledBtnPropsType>`
    border: 2px solid ${props => props.color || "#7bd758"};
    color: ${props => props.color || "#7bd758"};
    background-color: transparent;

    &:hover {
      border-color: cornflowerblue;
      color: cornflowerblue;
      background-color: transparent;
    }
  `}
  
  ${props => props.primary && css<StyledBtnPropsType>`
    background-color: ${props => props.color || "#7bd758"};
    color: snow;

    &:hover {
      background-color: rgba(227, 17, 153, 0.68);
    }
  `}
`

export const SuperButton = styled(StyledBtn)`
  border-radius: 5px;
  color: darkorange;
  
  &:hover {
    animation: ${MyAnimation} 2s ease-in-out;
  }
  
`