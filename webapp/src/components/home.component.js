import React, { Component } from 'react';
import '../App.css';
import { Navbar, Nav, Button, FormControl, Container, Row, Form, Card } from "react-bootstrap"
import Carousel from 'react-bootstrap/Carousel'
import LinkContainer from 'react-router-bootstrap'
import { Route, Router } from 'react-router-dom'
import CovidComponent from './covid.component'
import InstalacionesComponent from './instalaciones.component'
import SanseComponent from './sanse.component'

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
            <img className="d-block w-100" src="assets/_DSF2135.jpg" alt="First slide" />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <h6>Nulla vitae elit libero, a pharetra augue mollis interdum.</h6>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className="d-block w-100" src="assets/_DSF2135.jpg" alt="First slide" />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <h6>Nulla vitae elit libero, a pharetra augue mollis interdum.</h6>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className="d-block w-100" src="assets/DSC_0450.jpg" alt="First slide" />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <h6>Nulla vitae elit libero, a pharetra augue mollis interdum.</h6>
            </Carousel.Caption>
          </Carousel.Item>
          
        </Carousel>
        <br />
        <Container fluid>
          <Row>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="assets/DSC_0450.jpg" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Button variant="dark">Go somewhere</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="assets/DSC_0450.jpg" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Button variant="dark">Go somewhere</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="assets/DSC_0450.jpg" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Button variant="dark">Go somewhere</Button>
            </Card.Body>
          </Card>
          </Row>
        </Container>
      </div>
    );
  }
}

