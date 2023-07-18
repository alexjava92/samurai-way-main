import styled from "styled-components";


export const StyledBtn = styled.button`
  border: none;
  background-color: #7bd758;
  padding: 10px 20px;
  border-radius: 5px;
  color: snow;
  font-size: 2rem;
  font-weight: bold;

  &:hover {
    background-color: rgba(227, 17, 153, 0.68);
  }

  &:last-child {
    background-color: yellow;
  }
`

export const SuperButton = styled(StyledBtn)`
  border-radius: 5px;
  color: darkorange;
`