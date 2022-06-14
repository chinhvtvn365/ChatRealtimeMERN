import React from 'react'
import { Form, Button, Col, Row } from 'react-bootstrap';
import "./Message.css"

function Message() {
  function handleSendMessage(e) {
    e.preventDefault();
  }
  return (
    <>
    <div className="message-send"></div>
      <Form onSubmit={handleSendMessage}>
        <Row>
          <Col md={11} style={{padding: 0}}>
            <Form.Group>
              <Form.Control type="text" placeholder="Your message" />
            </Form.Group>
          </Col>
          <Col md={1}>
            <Button variant="primary" type="submit" style = {{ backgroundColor: '#1190cb'}}>
              <i className="fas fa-location-arrow"></i>
            </Button>
          </Col>
        </Row>
      </Form>
    </>
  )
}

export default Message