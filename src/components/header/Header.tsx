import React from 'react';
import styled from "styled-components";

export const Header = () => {
    return (
        <StyledHeader>
            <StyledImgLogo src="https://upload.wikimedia.org/wikipedia/commons/6/60/Logo-logosu.png"/>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
  grid-area: h;
  background-color: lightgrey;
`

const StyledImgLogo = styled.img`
  max-width: 100px;
  padding: 10px;

`