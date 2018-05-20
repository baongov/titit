import React, {Component} from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import './index.css'

class NavBarInstance extends Component {
  render() {
    return(
      <div>
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">TWITTER</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav bsStyle="pills">
              <NavItem eventKey={1}>About</NavItem>
            </Nav>
            <Nav pullRight>
              <NavItem eventKey={3}>Register</NavItem>
              <NavItem eventKey={4}>Sign In</NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavBarInstance;
