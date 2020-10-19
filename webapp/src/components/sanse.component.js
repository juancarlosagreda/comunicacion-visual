import React, { Component} from 'react';
import '../App.css';
import { Navbar, Nav, Button, FormControl, NavDropdown, Form } from "react-bootstrap"
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

      sanse component
      {/* <Router>
        <Route path="/home" component={HomeComponent}/>
        <Route path="/instalaciones" component={InstalacionesComponent}/>
        <Route path="/sanse" component={SanseComponent}/>
        <Route path="/covid" component={CovidComponent}/>
      </Router> */}

      instalaciones component!
      
      {/* <Carousel>

        <Carousel.Item style={{'height': "300px"}}>
          <img
            className="d-block w-100"
            src={'../public/logo512.png'}
            alt="First slide" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item style={{'height': "300px"}}>
          <img
            className="d-block w-100"
            src={'../public/logo512.png'}
            alt="Second slide" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>

      </Carousel> */}
      </div>
    );
  }
}

