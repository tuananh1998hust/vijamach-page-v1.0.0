import React, { Component, Fragment } from "react";
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from "reactstrap";
import { Link } from "react-router-dom";

class AppNavbar extends Component {
  state = {
    isOpen: false
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    return (
      <div id="navbar">
        <Navbar color="dark" dark expand="sm">
          <Link className="nav-logo" to="/">
            Vijamach
          </Link>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </NavItem>
              <NavItem>
                <Link className="nav-link" to="/products">
                  Products
                </Link>
              </NavItem>
              <NavItem>
                <Link className="nav-link" to="/join-us">
                  Join Us
                </Link>
              </NavItem>
              <NavItem>
                <Link className="nav-link" to="/cart">
                  <i className="fas fa-shopping-cart" />
                </Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default AppNavbar;
