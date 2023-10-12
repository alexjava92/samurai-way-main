import React from 'react';
import {Header} from "./components/header/Header";
import styled from 'styled-components'
import {Link} from "./components/Link.styled";
import {myTheme} from "./components/styles/Theme.styled";
import {Navbar} from "./components/nav/Navbar";
import {Profile} from "./components/propfile/Profile";
import {Dialogs} from "./components/dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {RootStateType, store} from "./components/redux/State";

type AppProps = {
    store: RootStateType;

    // addPost: (text: string) => void
}


const App: React.FC<AppProps> = (props) => {

    const state = store.getState()

    return (

        <BrowserRouter>
            <StyledWrapper>
                <Header/>
                <Navbar/>
                <StyledWrapperContent>

                    <Route path={"/dialogs"}  render={() => <Dialogs dialogsPage={state.dialogsPage}/>}/>
                    <Route path={"/profile"}  render={() => <Profile dispatch={store.dispatch.bind(store)} posts={state.profilePage.posts}
                                                                    />}/>
                </StyledWrapperContent>
            </StyledWrapper>
        </BrowserRouter>
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

const StyledWrapperContent = styled.div`
  grid-area: c;


`
