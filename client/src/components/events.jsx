import React, { Component } from 'react';
import {
    Form,
    Button,
    Col,
    FormGroup,
    ControlLabel,
    FormControl
} from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';

export default class Event extends Component {

    constructor (props) {
        super(props)
        this.state = {
          startDate: moment()
        };
        this.handleChange = this.handleChange.bind(this);
      }
     
      handleChange(date) {
        this.setState({
          startDate: date
        });
      }

    // constructor(props) {
    //   super(props);
    //   this.state = {
    //     value: ''
    //   };
  
    //   this.handleChange = this.handleChange.bind(this);
    //   this.handleSubmit = this.handleSubmit.bind(this);
    // }
  
    // handleChange(event) {
    //   this.setState({value: event.target.value});
    // }
  
    // handleSubmit(event) {
    //   alert('Event has been created!' + this.state.value);
    //   event.preventDefault();
    // }
  
    render() {
      return (

// Title of Event
    <Form horizontal onSubmit={this.handleSubmit}>
    <FormGroup controlId="formHorizontalTitle">
    <Col componentClass={ControlLabel} sm={4}>
        Title of Event
    </Col>
    <Col sm={5}>
        <FormControl type="Title" placeholder="" />
    </Col>
    </FormGroup>

{/* Selection Values */}
    <FormGroup controlId="formControlsSelect">
    <Col componentClass={ControlLabel} sm={4}>
      <ControlLabel>Type of Event</ControlLabel>
    </Col>
    <Col sm={5}>
      <FormControl componentClass="select" placeholder="select">
        <option value="select">select</option>
        <option value="other">Birthday</option>
        <option value="other">Meeting</option>
        <option value="other">...</option>
        <option value="other">...</option>
        <option value="other">...</option>
        <option value="other">...</option>
        <option value="other">...</option>
        <option value="other">...</option>
      </FormControl>
    </Col>
    </FormGroup>

{/* Date of Event */}
    <FormGroup controlId="formControlsDate">
    <Col componentClass={ControlLabel} sm={4}>
      <ControlLabel>Date of Event</ControlLabel>
      </Col>
    <Col sm={5}>
   <DatePicker
    selected={this.state.startDate}
    onChange={this.handleChange} />
</Col>
</FormGroup>

{/* Notes of Event */}
    <FormGroup controlId="formControlsTextarea">
    <Col componentClass={ControlLabel} sm={4}>
      <ControlLabel>Event Notes</ControlLabel>
      </Col>
      <Col componentClass={ControlLabel} sm={4}>
      <FormControl componentClass="textarea" placeholder="" />
      </Col>
    </FormGroup>

    <FormGroup>
    <Col smOffset={4} sm={8}>
        <Button bsStyle="default" type="submit" value="submit">Submit</Button> 
    </Col>
    </FormGroup>
    </Form>
      );
    }
  }