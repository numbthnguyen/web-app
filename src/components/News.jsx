import React, { Component } from 'react';
import {Container, Row, Col, Image } from 'react-bootstrap';
import './News.css';

export default class News extends Component {
    render() {
        return (
            <div>
                <Image src="assets/heaven.jpg" className="header-image" />
                <Container>
                    <h2>News</h2>
                    <Row>
                        <Col xs={12} sm={8} className="main-section">
                            <p>I like to watch anime</p>
                            <p>Christian is a bitch</p>
                        </Col>
                        <Col xs={12} sm={8} className="sidebar-section">
                            <Image src="assets/miku.jpg" />
                            <p>Best girl</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    };
}