import React from 'react';
import Header from "./Header";
import styled, {ThemeProvider} from 'styled-components'
import {StyledBtn, SuperButton} from "./components/Button.styled";
import {Link} from "./components/Link.styled";
import {Menu} from "./components/Menu.styled";
import {GlobalStyled} from "./components/styles/GlobalStyled";
import {myTheme} from "./components/styles/Theme.styled";
import {StyledBox, StyledButton, StyledCard, StyledHeading, StyledImage, StyledText} from "./Card";

const App = () => {
    return (

        <div className="App">
            <ThemeProvider theme={myTheme}>
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
                    <StyledCard>
                        <StyledImage/>
                        <StyledHeading>Headline</StyledHeading>
                        <StyledText>
                            Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut.
                            Sit molestie ornare in venen.
                        </StyledText>
                        <StyledBox>
                        <StyledButton>See more</StyledButton>
                        <StyledButton>Save</StyledButton>
                        </StyledBox>
                    </StyledCard>
                </Box>

                <Box>
                    <StyledBtn as={Link} href="#">Hello</StyledBtn>
                    <StyledBtn color="red" as="a" href="#">Hello</StyledBtn>


                    <StyledBtn color={myTheme.colors.primary} primary fontSize={"55px"} as="a"
                               href="#">primary</StyledBtn>
                    <SuperButton color={myTheme.colors.secondary} outlined fontSize={"55px"}>outlined</SuperButton>
                </Box>
            </ThemeProvider>

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

  @media ${myTheme.media.tablet} {
    flex-direction: column;
  }
`


