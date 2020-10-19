import React, { Component } from 'react';
import '../App.css';
import { Navbar, Nav, Button, FormControl, NavDropdown, Form } from "react-bootstrap"
import Carousel from 'react-bootstrap/Carousel'
import LinkContainer from 'react-router-bootstrap'
import { Route, Router } from 'react-router-dom'
import HomeComponent from './home.component'
import InstalacionesComponent from './instalaciones.component'
import SanseComponent from './sanse.component'



export default class CovidComponent extends Component {
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
      <h3>covid 19</h3>
      

      </div>
    );
  }
}

