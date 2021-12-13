import React from "react"
import {Link} from "react-router-dom"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import "./Header.css"

const Header = () => {
    return (
    <>
    <Navbar collapseOnSelect bg="black" expand="sm" sticky="top" variant="dark">
        <Navbar.Brand className="col-6 d-flex mx-0 pe-3 justify-content-end align-items-center">
            <img alt="" src="/img/header-final-2.png" className="d-inline-block align-top headerLogo"/>
        </Navbar.Brand>
        <Navbar.Toggle className="me-4" aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
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
    </>
    )
}

export default Header