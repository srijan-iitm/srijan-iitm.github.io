import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const SrijanNav = () => {
    return(
        <Navbar sticky="top" collapseOnSelect expand="lg" bg="light" variant="light">
            <Navbar.Brand href="#home">Srijan</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#events">Events</Nav.Link>
                <Nav.Link href="#team">Team</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default SrijanNav