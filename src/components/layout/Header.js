import React from "react"
import {Link} from "react-router-dom"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
// import Container from "react-bootstrap/Container"
// import NavDropdown from "react-bootstrap/NavDropdown"
import "./Header.css"

const Header = () => {
    return (
    <>
    <Navbar collapseOnSelect bg="black" expand="sm" sticky="top" variant="dark">
        <Navbar.Brand className="col-6 d-flex mx-0 pe-3 justify-content-end align-items-center">
            <img alt="mario cart chart" src="/img/header-final-2.png" className="d-inline-block align-top headerLogo"/>
        </Navbar.Brand>
        <Navbar.Toggle className="me-4" aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
                <ul className="navbar-nav ms-3 col-6">
                    <li className="nav-item">
                        <Link className="nav-link text-white" to="/"><b>HOME</b></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white" to="/builder"><b>BUILDER</b></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white" to="/cart"><b>CART</b></Link>
                    </li>
                </ul>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
    {/* <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
                <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
                </Nav>
                <Nav>
                <Nav.Link href="#deets">More deets</Nav.Link>
                <Nav.Link eventKey={2} href="#memes">
                    Dank memes
                </Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar> */}
    </>
    )
}

export default Header