import React, { Component } from 'react';
import '../App.css';
import { Navbar, Nav, Button, FormControl, Jumbotron, Container, Accordion, Card, Row, Form, Col, Carousel } from "react-bootstrap"
var { SocialIcon } = require('react-social-icons');



export default class CovidComponent extends Component {
  render() {
    return (
      <div className="App">
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#">Universidad de Navarra</Navbar.Brand>
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
        <h1>COVID-19</h1>
        <p>
          La Universidad de Navarra no solo destaca como pioneros en campos 
          como la docencia o investigación, si no también por una gran cercanía
          con los nuestros: empleados, profesores y alumnos; haciendo que su 
          experiencia en la universidad sea lo más agradable posible.  
          Desgraciadamente durante este año 2020 el mundo ha dado un vuelco debido a 
          la devastadora situación generada por la pandemia de la COVID-19. Ante tal 
          situación la Universidad de Navarra, como muchas otras instituciones, han 
          propuesto un riguroso número de normas para frenar la propagación del virus. 
        </p>
        <p>
          <Button href="https://www.unav.edu/en/web/prepara2/inicio" variant="primary">Learn more</Button>
        </p>
      </Jumbotron>
      <Container fluid>
        <h3>¿Cuales son los motivos para tales medidas?</h3>
        <Row>
          <Col>
            <Accordion defaultActiveKey="">
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="0">
                    La gran cercanía en la Universidad de Navarra 
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    La gran cercanía en la Universidad de Navarra es posible gracias al gran 
                    ambiente de familia que se respira en él. Desde la docencia, la relación 
                    profesor-alumno, relación con los empleados… es palpable el objetivo de 
                    formar a los mejores profesionales del presente y del futuro poyándose los 
                    unos en los otros.
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card> 
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="1">
                    Empatia, amistad y espiritu
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>
                    Empatía y amistad hacia las personas que forman parte de la universidad. 
                    Cuidar a los nuestros. <br />
                    Empatía y espíritu de responsabilidad con la sociedad en la que vivimos 
                    ¿Que pensamos que hay que hacer?

                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card> 
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="2">
                    Presencia social
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="2">
                  <Card.Body>
                    La Universidad de Navarra es una universidad muy presente en la sociedad 
                    de hoy en día. Ya sea mediante actividades solidarias como acompañamiento, 
                    teatros, conciertos de música… o mediante instituciones como la CUN o el CIMA, 
                    todas en vistas a ayudar al sector de la sociedad más necesitado. Por eso la 
                    Universidad de Navarra es un referente para mucha gente, y por tanto debe dar ejemplo 
                    y lanzar un mensaje de responsabilidad y unidad. La universidad es un activo para la 
                    sociedad muy importante, y debe actuar como tal.
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card> 
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="3">
                    ¿Que medidas hemos tomado?
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="3">
                  <Card.Body>
                    <Carousel>
                      <Carousel.Item>
                        <img className="d-block w-100" src="assets/covid-cartel.jpg" alt="First slide" />
                        <Carousel.Caption>
                          <h3>Medidas básicas</h3>
                          <h6>Alcohol gel, mascarillas obligatorias, y pantallas protectoras</h6>
                        </Carousel.Caption>
                      </Carousel.Item>
                      <Carousel.Item>
                        <img className="d-block w-100" src="assets/covid-mesas.jpg" alt="First slide" />
                        <Carousel.Caption>
                          <h3>Reducción del aforo por las aulas</h3>
                          <h6>Según el espacio en el aula y las distancias de seguridad</h6>
                        </Carousel.Caption>
                      </Carousel.Item>
                    </Carousel>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </Col>
        </Row>
      </Container>
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

