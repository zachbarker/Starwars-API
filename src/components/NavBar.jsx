import React, { useState, useEffect } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const NavBar = () => {
  
    return (  

        <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Star Wars Compendium</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/films">Films</Nav.Link>
            <Nav.Link href="/people">People</Nav.Link>
            <Nav.Link href="/species">Species</Nav.Link>
            <Nav.Link href="/starships">Starships</Nav.Link>
            <Nav.Link href="/vehicles">Vehicles</Nav.Link>
            <Nav.Link href="/planets">Planets</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

    );

}

export default NavBar;