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
                <Link
                  className="nav-link d-flex align-items-center cart"
                  to="/cart"
                >
                  <i className="fas fa-shopping-cart mr-1" />
                  {carts.length ? (
                    <div>
                      <span>({carts.length})</span>
                      <div className="cart-view">
                        {carts.map((cart, index) => (
                          <div className="d-flex cart-item mb-2" key={index}>
                            <img
                              alt="cart"
                              className="cart-img mr-5"
                              src={cart.imgUrl}
                            />
                            <div className="flex-grow-1">
                              <p>{cart.name}</p>
                              <h5 className="text-danger">${cart.price}</h5>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : null}
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
