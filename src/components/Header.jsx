import React from 'react'

//CSS
import '../public/css/Header.css'

//Bootstrap components
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = () => {
    return (
        <Navbar id="header" collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="/">Commands</Navbar.Brand>
            <Nav className="mr-auto">
                    
                </Nav>
                <Nav>
                    <Nav.Link href="/">Commands</Nav.Link>
                    <Nav.Link href="/addCommand">Add command</Nav.Link>
                </Nav>
            
        </Navbar>
    )
}

export default Header
