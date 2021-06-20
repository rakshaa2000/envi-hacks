import React from 'react';
import './Navbar.css';
import { Navbar, Nav, Form, Button, FormControl } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from "./routes";

const Navigation = () => {
    return (
        <>
        <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="/">enviMed</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/MedicalWaste">Test safety of disposal</Nav.Link>
                    <Nav.Link href="/Categorise">Which bin to Dispose</Nav.Link>
                    <Nav.Link href="/Quiz">Knowledge Check</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        <Routes/>
        </>
    )
}

export default Navigation;