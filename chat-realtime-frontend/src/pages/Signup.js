import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import "./Signup.css";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import avatar from "../assets/anhsld.jpg";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [image, setImage] = useState(null);
  const [uploadImg, setUploadImg] = useState(false);
  const [reviewImg, setReviewImg] = useState(null);

  function validImg(e) {
    const file = e.target.files[0];
    setImage(file);
    setReviewImg(URL.createObjectURL(file));
  }

  async function uploadImage() {
    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", "svagg9j3");
    try{
      setUploadImg(true);
      let res = await fetch('https://api.cloudinary.com/v1_1/chinhvu/image/upload',{
        method: 'POST',
        body: formData
      })
      const data = await res.json();
      setUploadImg(false);
      return data.secure_url;
    }
    catch(err){
      setUploadImg(false);
      console.log(err);
    }
  }

  async function handleSignup(e) {
    e.preventDefault();
    if(!image) {
      return alert("Please choose an image");
    }
    const url = await uploadImage(image);
    console.log(url);
  }
  return (
    <Container>
      <Row>
        <Col
          md={7}
          className="d-flex flex-direction-column align-items-center justify-content-center"
        >
          <Form style={{ width: "80%", maxWidth: 500 }} onSubmit={handleSignup}>
            <h1 className="text-center">Create your account</h1>
            <div className="signup-profile-pic-container">
              <img src={reviewImg || avatar} className="signup-profile-pic"></img>
              <label htmlFor="upload-img" className="upload-image-label">
                <i className="fas fa-plus-circle add-image-icon"></i>
              </label>
              <input
                type="file"
                id="upload-img"
                hidden
                accept="image/png, image/jpeg"
                onChange={validImg}
              />
            </div>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Your name"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              {uploadImg ? "Waiting for Register..." : "Register"}
            </Button>
            <div className="py-4">
              <p className="text-center">
                Already have an account? <Link to="/signin">Login</Link>
              </p>
            </div>
          </Form>
        </Col>
        <Col md={5} className="signup-bg-img"></Col>
      </Row>
    </Container>
  );
}

export default Signup;
