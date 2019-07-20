import React, { Component } from 'react';
import  { Link } from 'react-router-dom';
import { Jumbotron, Container, Button } from 'react-bootstrap';
import './Home.css';

export default class Home extends Component {
    render() {
        return (
            <Container>
                <Jumbotron>
                    <h2>Welcome to anime</h2>
                    <p>Are a weeb?</p>
                </Jumbotron>
                <Link to="/about">
                    <Button bsstyle="primary">About</Button>
                </Link>
            </Container>
        );
    };
}