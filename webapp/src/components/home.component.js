import React, { Component } from 'react';
import '../App.css';
import { Navbar, Nav, Button, FormControl, Container, Row, Form, Card, Col } from "react-bootstrap"
import Carousel from 'react-bootstrap/Carousel'
var { SocialIcon } = require('react-social-icons');

export default class HomeComponent extends Component {
  render() {
    return (
      <div className="App">
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="/">Universidad de Navarra</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="/home">Inicio</Nav.Link>
                <Nav.Link href="/instalaciones">Instalaciones</Nav.Link>
                <Nav.Link href="/sanse">San Sebastián</Nav.Link>
                <Nav.Link href="/covid">COVID-19</Nav.Link>
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
      </Navbar>
      <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src="assets/home0.jpg" alt="First slide" />
            <Carousel.Caption>
              <h3>Universidad de Navarra - Campus San Sebastián</h3>
              <h6>El mejor lugar para completar tus estudios.</h6>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className="d-block w-100" src="assets/home1.jpg" alt="First slide" />
            <Carousel.Caption>
              <h3>Universidad de Navarra - Campus San Sebastián</h3>
              <h6>El mejor lugar para completar tus estudios.</h6>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className="d-block w-100" src="assets/home2.jpg" alt="First slide" />
            <Carousel.Caption>
              <h3>Universidad de Navarra - Campus San Sebastián</h3>
              <h6>El mejor lugar para completar tus estudios.</h6>
            </Carousel.Caption>
          </Carousel.Item>
          
        </Carousel>
        <br />
        <Container>
          <Row>
            <Col>
              <SocialIcon url="https://www.facebook.com/unav/" />
            </Col>
            <Col>
              <SocialIcon url="https://twitter.com/unav" />
            </Col>
            <Col>
              <SocialIcon url="https://www.instagram.com/universidaddenavarra/?hl=es" />
            </Col>
            <Col>
              <SocialIcon url="https://www.linkedin.com/school/universidad-de-navarra-cp/" />
            </Col>
          </Row>
        </Container>
        <br />
      </div>
    );
  }
}

