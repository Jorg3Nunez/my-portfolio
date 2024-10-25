// Navbar.js
import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
    background-color: #f0f0f0;
    padding: 20px;
`;

const NavLink = styled.a`
    margin-right: 20px;
    text-decoration: none;
    color: #333;
`;

const Navbar = () => {
    return (
        <Nav>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#contact">Contact</NavLink>
        </Nav>
    );
};

export default Navbar;