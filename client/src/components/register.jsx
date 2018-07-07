import React, { Component } from 'react';
import { Col, Button } from 'react-bootstrap';
import {Form, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

export default class Register extends Component {
  render() {
    return (
<Form horizontal>
<FormGroup controlId="formHorizontalFirstName">
    <Col componentClass={ControlLabel} sm={4}>
      Firstname
    </Col>
    <Col sm={5}>
      <FormControl type="firstName" placeholder="" />
    </Col>
  </FormGroup>

  <FormGroup controlId="formHorizontalLastName">
    <Col componentClass={ControlLabel} sm={4}>
      Lastname
    </Col>
    <Col sm={5}>
      <FormControl type="lastName" placeholder="" />
    </Col>
  </FormGroup>

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
      <Button type="submit">Sign up</Button>
    </Col>
  </FormGroup>
</Form>
    )
  }
}
