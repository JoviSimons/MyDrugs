import React from 'react';
import {Nav, Navbar, NavDropdown} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import { Link } from 'react-router-dom';
import ProfileButton from './ToProfileButton';

export default function Header(props) { 
    
    return (
        <header className="block row center">
            <Navbar bg="light" expand="lg">
            <Container>
                <Link style={{ textDecoration: 'none' }} to={`/`}>
                    <Navbar.Brand>MyDrugs</Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Link style={{ textDecoration: 'none', color: 'black' }} to={`/products`}>
                        Products
                    </Link>
                </Nav>
                <Nav>
                <NavDropdown title="Account" id="basic-nav-dropdown">
                    <NavDropdown.Item> 
                        <LoginButton></LoginButton>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                        <ProfileButton></ProfileButton>
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item> 
                        <LogoutButton></LogoutButton>
                    </NavDropdown.Item>
                </NavDropdown>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </header>
      );
}