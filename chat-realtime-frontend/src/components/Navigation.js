import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {LinkContainer} from 'react-router-bootstrap';
import logo from '../assets/ChatApp.png'
function Navigation() {
  return (
        <>
          <Navbar >
            <Container>
              <LinkContainer to='/' >
              <Navbar.Brand>
                <img src={logo} style={{height: 50}} />
              </Navbar.Brand>
              </LinkContainer>
              <Nav className="ms-auto">
                <LinkContainer to='/signin'>
                <Nav.Link>Signin</Nav.Link>
                </LinkContainer>
                <LinkContainer to='/chat'>
                <Nav.Link>Chat</Nav.Link>
                </LinkContainer>
              </Nav>
            </Container>
          </Navbar>
        </>
  )
}

export default Navigation