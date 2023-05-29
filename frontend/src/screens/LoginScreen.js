import React from 'react';
import { Form, Button, Image } from 'react-bootstrap';
import './LoginScreen.css';
import homeimage from '../images/home.png';
const LoginScreen = () => {
  return (
    <div className="login-screen">
      <div className="avatar-container">
        <Image src={homeimage} roundedCircle className="avatar-image" />
      </div>
      <Form className="form-container">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="label-color">Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted label-colo">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="label-color">Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <div className="text-center">
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default LoginScreen;
