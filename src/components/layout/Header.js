import React from "react"
import {Link} from "react-router-dom"
import Navbar from "react-bootstrap/Navbar"

const Header = () => {
    return (
    <>
    <Navbar bg="black" sticky="top" variant="dark">
        <Navbar.Brand className="col-6 d-flex mx-0 pe-3 justify-content-end align-items-center">
            <img alt="" src="/img/header-final-2.png" height="60" className="d-inline-block align-top"/>
        </Navbar.Brand>
        <ul className="navbar-nav col-6">
                <li className="nav-item">
                    <Link className="nav-link text-white ms-3" to="/"><b>HOME</b></Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-white" to="/builder"><b>BUILDER</b></Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-white" to="/cart"><b>CART</b></Link>
                </li>
            </ul>
    </Navbar>
    </>
    )
}

export default Header