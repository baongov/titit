import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { authenticate } from '../../state/actions';
import { signInWithGoogle, signOut} from '../../state/actions';

import './index.css'

const generateGooglePlusURL = function (uid) {
  return "https://plus.google.com/" + uid;
}

class NavBarInstance extends Component {
  render() {
    const { store } = this.context;
    const authentication = store.getState().authentication;
    return (
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
              <NavItem>
                <Link to="/about">About</Link>
              </NavItem>
            </Nav>
            <Nav pullRight>
              {
                authentication.authenticated ?
                    <NavItem onClick={() => signOut(store.dispatch)}>
                      Sign out
                    </NavItem>
                    : null
              }
              {
                authentication.authenticated ?
                    <NavItem>
                    <a 
                      href={generateGooglePlusURL(authentication.uid)}
                      >
                      {authentication.authorName}
                    </a>
                    </NavItem>
                  :
                  <NavItem onClick={() => signInWithGoogle(store.dispatch)}>
                    Sign in with Google
                  </NavItem>
              }
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
const mapDispatchToProps = {
  signInWithGoogle: signInWithGoogle
};

const mapStateToProps = (state) => ({
  authentication: state.authentication
})

NavBarInstance.contextTypes = {
  store: PropTypes.object.isRequired
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(NavBarInstance)
);
