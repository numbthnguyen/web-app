import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CustomNavBar.css';

export default class CustomNavBar extends Component {
    render() {
        return (
            <Navbar>
                <Navbar.Brand>
                    <Link to="/">EF Paint and Body</Link>
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Nav className="mr.auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>
                        <Nav.Link href="/news">News</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    };
}