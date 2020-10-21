import React from 'react';
import '../App.css';
import { Navbar, Nav, Button, FormControl, Container, Form, Image, Row, Col } from "react-bootstrap"
var { SocialIcon } = require('react-social-icons');

function App() {
  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
          <Navbar.Brand href="/">Universidad de Navarra</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="/home">Home</Nav.Link>
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
      <Image src="assets/DSC_0450.jpg" fluid />
      <br />
      <Container>
        <br />
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

export default App;
