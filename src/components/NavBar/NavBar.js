import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import '../../styles/Navbar.scss';

const csLogo = require('../../assets/csclub_transparent.png').default;

const NavBar = () => {
  const [background, setBackground] = useState('transparent');

  // eslint-disable-next-line no-unused-vars
  const handleScroll = (e) => {
    if (window.scrollY > 50) {
      setBackground('solid');
    } else {
      setBackground('transparent');
    }
  };

  useEffect(() => {
    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="nav-bar">
      <Navbar className={`bg-${background}`} fixed="top" collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src={csLogo}
              width="70"
              height="70"
              className="d-inline-block align-top"
              alt=" logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home" className="link-text">Home</Nav.Link>
              <Nav.Link href="#about" className="link-text">About</Nav.Link>
              <Nav.Link href="#halloffame" className="link-text">Hall Of Fame</Nav.Link>
              <Nav.Link href="#events" className="link-text">Events</Nav.Link>
              <Nav.Link href="#contacts" className="link-text">Contacts</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>

      </Navbar>
    </div>
  );
};

export default NavBar;
