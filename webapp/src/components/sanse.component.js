import React, { Component} from 'react';
import '../App.css';
import { Navbar, Nav, Button, Figure, FormControl, Carousel, Jumbotron, Container, Tabs, Tab, Form, Row, Col } from "react-bootstrap"
var { SocialIcon } = require('react-social-icons');

export default class SanseComponent extends Component {
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
        <h1>Donostia-San Sebastián</h1>
        <p>
          San Sebastián destaca como una de las ciudades más turísticas de la costa cantábrica. 
          Cuenta con 3 playas destacables, entre las que se encuentra la playa de la Concha, 
          considerada entre las mejores del mundo. Cuenta con gran variedad de parques y zonas de paseo, 
          en las que poder relajarse o hacer deporte sin el ajetreo de la calle. También cuenta 
          con diversos monumentos históricos, así como varios museos, y diferentes centros de cultura 
          como el Kursaal y el teatro Victoria Eugenia. Capital Europea de la Cultura en 2016, vive 
          a la altura de tal título.
        </p>
        <p>
          <Button href="https://estudiantextranjero.com/top-10-atracciones-de-san-sebastian-donostia-en-2020/" variant="primary">Learn more</Button>
        </p>
      </Jumbotron>
      <Container fluid>
        <Row>
          <Col>
            <Tabs defaultActiveKey="home" transition={false} id="noanim-tab-example" fluid>
              <Tab eventKey="home" title="Turismo">
                San Sebastián cuenta con una gran riqueza a la hora del turismo. 
                Sus playas, sus paseos, y su gran variedad de actividades permiten una 
                experiencia inolvidable para quien venga de visita. Cuenta con 3 playas 
                destacables, entre las que se encuentra la playa de la Concha, considerada 
                entre las mejores del mundo. Cuenta con gran variedad de parques y zonas de 
                paseo, en las que poder relajarse o hacer deporte sin el ajetreo de la calle. 
                Caben destacar también las zonas de los alrededores, accesibles tanto en coche como en 
                diferentes autobuses de cercanías, que también cuentan con su propia 
                belleza. 
              </Tab>
              <Tab eventKey="profile" title="Gastronomía">
                La diversidad de la cocina donostiarra es famosa en el mundo entero. 
                La gastronomía del pintxo es variada y rica en sabores. Basta con 
                acercarse a cualquier bar del centro para descubrir gran variedad de 
                estas tapas de picoteo. Experiencia obligada a quien venga de visita, 
                o a nuevos residentes.
              </Tab>
              <Tab eventKey="contact" title="Cultura">
                San Sebastián cuenta con una gran riqueza cultural. Una diversidad 
                nada desdeñable de museos tanto técnicos como artísticos, un acuario, 
                varios teatros y centros de actuaciones, además de centros de barrio que 
                man la vida de la zona. Caben destacar además el Festival Internacional 
                de Cine, celebrado en la ciudad la penúltima semana de septiembre, y la 
                festividad de San Sebastián con su tamborrada, celebrada el 20 de enero.
              </Tab>
            </Tabs>
            </Col>
            <Col>
              <Figure>
                <Figure.Image
                  width={250}
                  height={200}
                  alt="171x180"
                  src="assets/sanse2.jpg"
                />
                <Figure.Caption>
                    Playa de la Concha
                </Figure.Caption>
              </Figure>
            </Col>
        </Row>
      </Container>
      <br />

      <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src="assets/sanse0.jpg" alt="First slide" />
            <Carousel.Caption>
              <h3>Turismo</h3>
              <h6>San Sebastián destaca como una de las ciudades más turísticas de la costa cantábrica</h6>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className="d-block w-100" src="assets/sanse1.jpg" alt="First slide" />
            <Carousel.Caption>
              <h3>Gastronomía</h3>
              <h6>La diversidad de la cocina donostiarra es famosa en el mundo entero. </h6>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className="d-block w-100" src="assets/sanse3.jpg" alt="First slide" />
            <Carousel.Caption>
              <h3>Cultura</h3>
              <h6>Capital Europea de la Cultura en 2016, vive a la altura de tal título.</h6>
            </Carousel.Caption>
          </Carousel.Item>
          
          <Carousel.Item>
            <img className="d-block w-100" src="assets/sanse4.jpg" alt="First slide" />
            <Carousel.Caption>
              <h3>Cultura</h3>
              <h6>Capital Europea de la Cultura en 2016, vive a la altura de tal título.</h6>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className="d-block w-100" src="assets/sanse5.jpg" alt="First slide" />
            <Carousel.Caption>
              <h3>Cultura</h3>
              <h6>Capital Europea de la Cultura en 2016, vive a la altura de tal título.</h6>
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

