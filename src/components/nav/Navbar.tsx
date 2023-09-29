import React from 'react';
import styled from "styled-components";
import {NavLink} from "react-router-dom";

export const Navbar = () => {
    return (
        <StyledNav>
            <div>
                <StyledNavLink to="/profile">Profile</StyledNavLink>
            </div>
            <div>
                <StyledNavLink to="/dialogs">Messages</StyledNavLink>
            </div>
            <div>
                <StyledNavLink to="/news">News</StyledNavLink>
            </div>
            <div>
                <StyledNavLink to="/music">Music</StyledNavLink>
            </div>
            <div>
                <StyledNavLink to="setting">Settings</StyledNavLink>
            </div>
        </StyledNav>
    );
};

const StyledNav = styled.nav`
  grid-area: n;
  background-color: lightslategrey;
`
const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: black;
  padding: 10px;
  margin: 5px;

  &.active {  // Этот стиль будет применяться, когда у компонента NavLink будет класс "active"
    color: white;
  }

  &:hover {
    color: white;
  }
`;