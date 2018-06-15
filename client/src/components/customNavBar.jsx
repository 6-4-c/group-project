import React, { Component } from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class customNavBar extends Component {
  render() {
    return (
<Navbar default collapseOnSelect>
    <Navbar.Header>
        <Navbar.Brand>
            <Link to="/">Event Planner</Link>
            </Navbar.Brand>
            <Navbar.Toggle/>
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav pullRight>
                <NavItem eventKey={1} componentClass={Link} href="/login" to="/login">
                Login
                </NavItem>
                <NavItem eventKey={2} componentClass={Link} href="/register" to="/register">
                Register
                </NavItem>
                <NavItem eventKey={3} componentClass={Link} href="/createevent" to="/createevent">
                Create an Event
                </NavItem>
                </Nav>

                </Navbar.Collapse>
</Navbar>
    )
  }
}
