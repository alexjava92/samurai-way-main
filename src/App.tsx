import React from 'react';
import Header from "./Header";
import styled, {ThemeProvider} from 'styled-components'
import {StyledBtn, SuperButton} from "./components/Button.styled";
import {Link} from "./components/Link.styled";
import {Menu} from "./components/Menu.styled";
import {GlobalStyled} from "./components/styles/GlobalStyled";
import {myTheme} from "./components/styles/Theme.styled";
import {StyledBox, StyledButton, StyledCard, StyledHeading, StyledImage, StyledText} from "./Card";
import {Footer} from "./Footer";

const App = () => {
    return (


        <StyledWrapper>
            <StyledHeader>
                <StyledImgLogo src="https://upload.wikimedia.org/wikipedia/commons/6/60/Logo-logosu.png"/>
            </StyledHeader>
            <StyledNav>
                <div>
                    <StyledLink href="">Profile</StyledLink>
                </div>
                <div>
                    <StyledLink href="">Messages</StyledLink>
                </div>
                <div>
                    <StyledLink href="">News</StyledLink>
                </div>
                <div>
                    <StyledLink href="">Music</StyledLink>
                </div>
                <div>
                    <StyledLink href="">Settings</StyledLink>
                </div>
            </StyledNav>
            <StyledContent>
                <StyledImg
                    src="https://www.imgacademy.com/sites/default/files/styles/scale_1700w/public/2018-10/athletics-meta.jpg"/>
                Main content

                <div>ava+description</div>
                <div>
                    MyPosts
                    <div>
                        New Post
                    </div>
                </div>
            </StyledContent>
        </StyledWrapper>

    );
}

export default App;

const StyledWrapper = styled.div`

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  display: grid;
  width: 1200px;
  //margin: 0 auto;
  margin: auto;

  grid-template-areas: 
  "h h"
  "n c";

  grid-template-rows: 60px 1fr;
  grid-template-columns: 2fr 10fr;
  //grid-gap: 10px;

`

const StyledHeader = styled.header`
  grid-area: h;
  background-color: lightgrey;
`
const StyledImgLogo = styled.img`
  max-width: 100px;
  padding: 10px;

`
const StyledImg = styled.img`
  max-width: 1000px;
`

const StyledNav = styled.nav`
  grid-area: n;
  background-color: lightslategrey;
`

const StyledContent = styled.div`
  grid-area: c;
  background-color: antiquewhite;
`

const StyledLink = styled.a`

`


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


