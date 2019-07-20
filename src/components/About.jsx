import React, { Component } from 'react';
import { Container, Col, Image } from 'react-bootstrap';
import './About.css';

export default class About extends Component {
    render() {
        return (
            <div>
                <Image src="assets/zero.jpg" className="header-image" />
                <Container>
                    <Col xs={12} sm={8} smoffset={2}>
                        <Image src="assets/miku.jpg" className="about-image" />
                    </Col>
                </Container>
            </div>
        );
    };
}