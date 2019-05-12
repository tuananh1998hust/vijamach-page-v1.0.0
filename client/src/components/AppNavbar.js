import React, { Component } from "react";
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from "reactstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

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
    const { carts } = this.props.product;

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
                  <i className="fas fa-shopping-cart mr-1" />
                  {carts.length ? <span>({carts.length})</span> : null}
                </Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

AppNavbar.propTypes = {
  product: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  product: state.product
});

export default connect(mapStateToProps)(AppNavbar);
