import React from 'react';
import {Nav, Navbar, NavDropdown} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import ProfileButton from '../ToProfileButton';
import AuthenticationButton from '../Auth/AuthenticationButton';
import { Button } from '@mui/material';


export default function Header(props) { 

    const {cartItems} = props

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
                </Nav>
                <Nav>
                <NavDropdown title="Account" id="basic-nav-dropdown">
                    <NavDropdown.Item> 
                        <AuthenticationButton/>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                        <ProfileButton/>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                        <Link style={{ textDecoration: 'none' }} to={`/basket`}>
                            <Button variant="text">Basket</Button> 
                            {cartItems.length}
                        </Link>
                    </NavDropdown.Item>
                </NavDropdown>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </header>
      );
}