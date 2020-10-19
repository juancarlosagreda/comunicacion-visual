import React from 'react';
import '../App.css';
import { Navbar, Nav, Button, FormControl, NavDropdown, Form } from "react-bootstrap"
import Carousel from 'react-bootstrap/Carousel'
import LinkContainer from 'react-router-bootstrap'
import { Route } from 'react-router-dom'
import {CovidComponent} from './CovidComponent'
import {HomeComponent} from './HomeComponent'
import {InstalacionesComponent} from './InstalacionesComponent'

function SanseComponent() {
  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/home">Universidad de Navarra</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <LinkContainer to="/home">
              <Nav.Link href="#home">Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/instalaciones">
              <Nav.Link href="/instalaciones">Instalaciones</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/sanse">
              <Nav.Link href="#sanse">San Sebastián</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/covid">
              <Nav.Link href="#covid">COVID-19</Nav.Link>
            </LinkContainer>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
    </Navbar>
    <Route path="/home" component={HomeComponent}/>
    <Route path="/instalaciones" component={InstalacionesComponent}/>
    <Route path="/sanse" component={SanseComponent}/>
    <Route path="/covid" component={CovidComponent}/>

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

export default SanseComponent;