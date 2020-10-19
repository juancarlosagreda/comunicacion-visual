import React, { Component} from 'react';
import '../App.css';
import { Navbar, Nav, Button, FormControl, Media, Jumbotron, Container, Card, Form } from "react-bootstrap"
import Carousel from 'react-bootstrap/Carousel'
import LinkContainer from 'react-router-bootstrap'
import { Route, Router } from 'react-router-dom'
import CovidComponent from './covid.component'
import HomeComponent from './home.component'
import InstalacionesComponent from './instalaciones.component'

export default class SanseComponent extends Component {
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
        <h1>Donostia-San Sebastián</h1>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for calling
          extra attention to featured content or information.
        </p>
        <p>
          <Button variant="dark">Learn more</Button>
        </p>
      </Jumbotron>
      <Container fluid>
      <ul className="list-unstyled">
        <Media as="li">
          <img
            width={64}
            height={64}
            className="mr-3"
            src="assets/DSC_0450.jpg"
            alt="Generic placeholder"
          />
          <Media.Body>
            <h5>List-based media object</h5>
            <Card.Body>
              Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
              ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
              tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
              fringilla. Donec lacinia congue felis in faucibus.
            </Card.Body>
          </Media.Body>
        </Media>

        <Media as="li">
          <img
            width={64}
            height={64}
            className="mr-3"
            src="assets/DSC_0450.jpg"
            alt="Generic placeholder"
          />
          <Media.Body>
            <h5>List-based media object</h5>
            <p>
              Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
              ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
              tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
              fringilla. Donec lacinia congue felis in faucibus.
            </p>
          </Media.Body>
        </Media>

        <Media as="li">
          <img
            width={64}
            height={64}
            className="mr-3"
            src="assets/DSC_0450.jpg"
            alt="Generic placeholder"
          />
          <Media.Body>
            <h5>List-based media object</h5>
            <p>
              Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
              ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
              tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
              fringilla. Donec lacinia congue felis in faucibus.
            </p>
          </Media.Body>
        </Media>
      </ul>
      </Container>
      
      </div>
    );
  }
}

