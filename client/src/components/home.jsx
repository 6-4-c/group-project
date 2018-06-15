import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron , Grid, Row, Col, Image, Button } from 'react-bootstrap';

export default class Home extends Component {
  render() {
    return (
        <Grid>
        <Jumbotron>
            <h2>Welcome to Event Planner</h2>
            <p>A bunch of contents about this app will be here!</p>
            <Link to="/register">
            <Button bsStyle="primary">Create an account
            </Button>
            </Link>
            </Jumbotron>
        </Grid>
    )
  }
}
