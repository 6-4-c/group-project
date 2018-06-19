import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron , Grid, Row, Col, Image, Button } from 'react-bootstrap';
import {Form, FormGroup, ControlLabel, Checkbox, FormControl } from 'react-bootstrap';
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
    <Col smOffset={4} sm={10}>
      <Checkbox>Remember me</Checkbox>
    </Col>
  </FormGroup>

  <FormGroup>
    <Col smOffset={4} sm={10}>
      <Button type="submit">Sign in</Button>
    </Col>
  </FormGroup>
</Form>

    )
  }
}
