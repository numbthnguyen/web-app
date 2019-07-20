import React, { Component } from 'react';
import  { Link } from 'react-router-dom';
import { Jumbotron, Container, Button, Row, Col, Image } from 'react-bootstrap';
import './Home.css';

export default class Home extends Component {
    render() {
        return (
            <Container>
                <Jumbotron>
                    <h2>Welcome to anime</h2>
                    <p>Are a weeb?</p>
                    <Link to="/about">
                        <Button bsstyle="primary">About</Button>
                    </Link>
                </Jumbotron>
                <Row className="show-grid text-center">
                    <Col xs={12} sm={4} className="person-wrapper">
                        <Image src="assets/heaven.jpg" className="profile-pic" />
                        <h3>Heaven's Feel</h3>
                        <p>Good movie</p>
                    </Col>
                    <Col xs={12} sm={4} className="person-wrapper">
                        <Image src="assets/miku.jpg" circle="true" className="profile-pic" />
                        <h3>Miku</h3>
                        <p>Good movie</p>
                    </Col>
                    <Col xs={12} sm={4} className="person-wrapper">
                        <Image src="assets/zero.jpg" className="profile-pic" />
                        <h3>Fate zero</h3>
                        <p>Good movie</p>
                    </Col>
                </Row>
            </Container>
        );
    };
}