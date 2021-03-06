import React, { Component } from 'react'
// import { Link } from 'react-router-dom';
import { 
  Col, 
  Button,
  Form,
  FormGroup,
  ControlLabel,
  Checkbox,
  FormControl } from 'react-bootstrap';
// import './login.css';


export default class Login extends Component {
  render() {
    return (
<Form horizontal>
  <FormGroup controlId="formHorizontalEmail">
    <Col componentClass={ControlLabel} sm={4}>
      Email
    </Col>
    <Col sm={5}>
      <FormControl type="email" placeholder="Email" />
    </Col>
  </FormGroup>

  <FormGroup controlId="formHorizontalPassword">
    <Col componentClass={ControlLabel} sm={4}>
      Password
    </Col>
    <Col sm={5}>
      <FormControl type="password" placeholder="Password" />
    </Col>
  </FormGroup>

  <FormGroup>
    <Col smOffset={4} sm={8}>
      <Checkbox>Remember me</Checkbox>
    </Col>
  </FormGroup>

  <FormGroup>
    <Col smOffset={4} sm={8}>
      <Button bsStyle="primary" type="button">Sign in</Button> 
      <Button bsStyle="" type="button" href="/register">Create an account</Button>
    </Col>
  </FormGroup>
</Form>

    )
  }
}
