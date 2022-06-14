import React from 'react'
import {Row, Col, Button} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap';
import './Home.css'

function Home() {
  return <Row className='home'>
    <Col md={6} className='d-flex flex-direction-column align-items-center justify-content-center'>
      <div>
        <h1>Messenger chat applications</h1>
        <p>Make money to buy a villa in district 2</p>
        <LinkContainer to="/chat">
          <Button style={{backgroundColor: "#1190cb"}}>Get started <i className="fas fa-comments home-mess-icon" /></Button>
        </LinkContainer>
      </div>
    </Col>
    <Col md={6} className="home-bg-img"></Col>
  </Row>
}

export default Home
