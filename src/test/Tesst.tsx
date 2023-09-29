// src/Test.js
import React from 'react';
import styled from 'styled-components';
import {BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


// Основной компонент Test
function Test() {
    return (
        <Router>
            <AppContainer>
                <Nav>
                    <NavList>
                        <NavItem>
                            <Link to="/test">Домой</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/test/about">О нас</Link>
                        </NavItem>
                    </NavList>
                </Nav>

                <Content>
                    <Switch>
                        <Route exact path="/test">
                            <Home />
                        </Route>
                        <Route path="/test/about">
                            <About />
                        </Route>
                    </Switch>
                </Content>
            </AppContainer>
        </Router>
    );
}
// Стилизованные компоненты
const AppContainer = styled.div`
  font-family: Arial, sans-serif;
  background-color: #e6f7ff; // Светло-синий фон
  min-height: 100vh;
  padding: 20px;
`;

const Nav = styled.nav`
  background-color: #0077b6; // Темно-синий фон
  padding: 10px;
  border-radius: 8px;
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  gap: 10px;
`;

const NavItem = styled.li`
  & a {
    text-decoration: none;
    color: #ffffff; // Белый цвет текста
    padding: 5px 10px;
    border-radius: 4px;
    transition: background-color 0.2s;

    &:hover {
      background-color: #005086; // Темно-синий цвет при наведении
    }
  }
`;

const Content = styled.div`
  margin-top: 20px;
`;

// Внутренние страницы
function Home() {
    return <h2>Домашняя страница</h2>;
}

function About() {
    return <h2>Страница "О нас"</h2>;
}

export default Test;
