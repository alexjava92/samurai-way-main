import React from 'react';
import Header from "./Header";
import styled from 'styled-components'
import {StyledBtn, SuperButton} from "./components/Button.styled";
import {Link} from "./components/Link.styled";
import {Menu} from "./components/Menu.styled";
import {GlobalStyled} from "./components/styles/GlobalStyled";

const App = () => {
    return (

        <div className="App">
            <GlobalStyled/>
            <Header/>
            <Menu>
                <ul>
                    <li><a href=""> menu item 1</a></li>
                    <li><a href=""> menu item 2</a></li>
                    <li><a href=""> menu item 3</a></li>
                </ul>
            </Menu>
            <Box>
                <StyledBtn as={Link} href="#">Hello</StyledBtn>
                <StyledBtn color="red" as="a" href="#">Hello</StyledBtn>


                <StyledBtn primary fontSize={"55px"}  as="a" href="#">primary</StyledBtn>
                <SuperButton outlined fontSize={"55px"}>outlined</SuperButton>
            </Box>

            Hello, samurai! Let's go!
        </div>
    );
}

export default App;

const Box = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  gap: 20px;

  button {
    cursor: pointer;
  }

  ${Link} {
    cursor: zoom-in;
  }

  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`


