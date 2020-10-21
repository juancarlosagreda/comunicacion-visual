import React, { Component } from 'react';
import '../App.css';
import { Navbar, Nav, Button, FormControl, Carousel, Form, Container, Card, Jumbotron, Row, Col, Figure } from "react-bootstrap"
var { SocialIcon } = require('react-social-icons');

export default class InstalacionesComponent extends Component {
  render() {
    return (
      <div className="App">
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="/home">Universidad de Navarra</Navbar.Brand>
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
      <Jumbotron>
        <h1>Instalaciones</h1>
        <p>
            La Universidad de Navarra destaca por sus instalaciones, 
            tanto en el ámbito académico como a la hora de facilitar a sus 
            alumnos una vida universitaria completa, y enriquecer la vida de 
            la ciudad en la que se encuentra el campus, ya sea Pamplona, 
            San Sebastián, o Madrid.
        </p>
        <p>
          <Button href="https://www.unav.edu/en/web/conoce-la-universidad/campus" variant="dark">Learn more</Button>
        </p>
      </Jumbotron>
      
      <Container>
        <Row>
          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="assets/campus-pamp.jpg" />
              <Card.Body>
                <Card.Title>Campus Pamplona</Card.Title>
                <Card.Text>
                  En Pamplona es donde se encuentra el campus principal de la Universidad, 
                  por lo que es donde se encuentran la mayoría de las instalaciones. 
                </Card.Text>
                <Button href="https://360.unav.edu/G1jGbc2JLN/9638884p,2830027m,145.12h,65.13t" variant="dark">Conocer más</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="assets/campus-sanc.jpg" />
                <Card.Body>
                  <Card.Title>Campus San Sebastián</Card.Title>
                  <Card.Text>
                    San Sebastián se encuentra apenas a una hora en coche de Pamplona, 
                    y es donde se halla la Escuela de Ingenieros de la Universidad, 
                    TECNUN, foco de esta página web. 
                  </Card.Text>
                  <Button href="https://www.unav.edu/en/alumnos/campus-de-san-sebastian" variant="dark">Conocer más</Button>
                </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="assets/campus-madrid.jpeg" />
                <Card.Body>
                  <Card.Title>Campus Madrid</Card.Title>
                  <Card.Text>
                    El campus de Madrid ha recibido mucha potenciación por parte de la 
                    Universidad en los últimos años, con el lanzamiento de nuevos másteres 
                    y la apertura de una sede de la CUN con tecnología punta. 
                  </Card.Text>
                  <Button href="https://360.unav.edu/G1jGbc2JLN/11632822p,2830027m,399.99h,90.55t" variant="dark">Conocer más</Button>
                </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <br />
      
      <Carousel>

          <Carousel.Item>
            <img className="d-block w-100" src="assets/tecnun0.jpg" alt="First slide" />
            <Carousel.Caption>
              <h3>Campus San Sebastián</h3>
              <h6></h6>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className="d-block w-100" src="assets/tecnun1.jpg" alt="First slide" />
            <Carousel.Caption>
              <h3>Campus San Sebastián</h3>
              <h6></h6>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className="d-block w-100" src="assets/tecnun2.jpg" alt="Second slide" />
            <Carousel.Caption>
              <h3>Campus San Sebastián</h3>
              <h6></h6>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className="d-block w-100" src="assets/tecnun3.jpg" alt="Third slide" />
            <Carousel.Caption>
              <h3>Campus San Sebastián</h3>
              <h6></h6>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className="d-block w-100" src="assets/tecnun4.jpg" alt="Fourth slide" />
            <Carousel.Caption>
              <h3>Campus San Sebastián</h3>
              <h6></h6>
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

