import React from 'react'
import { ListGroup } from 'react-bootstrap'

function Sidebar() {
  const rooms = ["room1", "room2", "room3"]
  return (
    <>
    <h2>Available rooms</h2>
    <ListGroup>
      {rooms.map((room, id) => (
        <ListGroup.Item key={id}>{room}</ListGroup.Item>
      ))}
    </ListGroup>
    <h2>Member</h2>
    </>
  )
}

export default Sidebar