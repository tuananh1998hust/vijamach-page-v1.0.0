import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Spinner,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import classnames from "classnames";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

// Actions
import { getProducts } from "../actions/productActions";

class Products extends Component {
  state = {
    activeTab: "0"
  };

  toggle = tab => {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  };

  componentDidMount() {
    this.props.getProducts();
  }

  render() {
    const { loading, products } = this.props.product;

    return (
      <Container>
        <h2 className="text-center mb-5">OUR PRODUCTS</h2>
        {loading === true ? (
          <Spinner className="mb-5" style={{ width: "3rem", height: "3rem" }} />
        ) : (
          <div>
            <Nav tabs>
              <NavItem>
                <NavLink
                  className={classnames({
                    active: this.state.activeTab === "0"
                  })}
                  onClick={() => {
                    this.toggle("0");
                  }}
                >
                  ALL
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({
                    active: this.state.activeTab === "1"
                  })}
                  onClick={() => {
                    this.toggle("1");
                  }}
                >
                  MECHANICS
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({
                    active: this.state.activeTab === "2"
                  })}
                  onClick={() => {
                    this.toggle("2");
                  }}
                >
                  AUTOMATICS
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({
                    active: this.state.activeTab === "3"
                  })}
                  onClick={() => {
                    this.toggle("3");
                  }}
                >
                  IT
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({
                    active: this.state.activeTab === "4"
                  })}
                  onClick={() => {
                    this.toggle("4");
                  }}
                >
                  HUMAN RESOURCE
                </NavLink>
              </NavItem>
            </Nav>

            <TabContent activeTab={this.state.activeTab}>
              <TabPane tabId="0">
                <Row className="mb-5">
                  {products.map(product => (
                    <Col sm="12" md="4" key={product._id}>
                      <div
                        className="product"
                        style={{
                          backgroundImage: "url(" + product.imgUrl + ")"
                        }}
                      >
                        <div className="product-text">
                          {product.name}{" "}
                          <span className="price">${product.price}</span>
                          <br />
                          <div className="product-hidden">
                            <small>{product.desc}. </small>
                            <Link
                              to={`/products/${product._id}`}
                              className="btn btn-outline-light"
                            >
                              Views
                            </Link>
                          </div>
                        </div>
                      </div>
                    </Col>
                  ))}
                </Row>
              </TabPane>
              <TabPane tabId="1">
                <Row className="mb-5">
                  {products
                    .filter(item => item.types_product === 1)
                    .map(product => (
                      <Col sm="12" md="4" key={product._id}>
                        <div
                          className="product"
                          style={{
                            backgroundImage: "url(" + product.imgUrl + ")"
                          }}
                        >
                          <div className="product-text">
                            {product.name}{" "}
                            <span className="price">${product.price}</span>
                            <br />
                            <div className="product-hidden">
                              <small>{product.desc}. </small>
                              <Link
                                to={`/products/${product._id}`}
                                className="btn btn-outline-light"
                              >
                                Views
                              </Link>
                            </div>
                          </div>
                        </div>
                      </Col>
                    ))}
                </Row>
              </TabPane>
              <TabPane tabId="2">
                <Row className="mb-5">
                  {products
                    .filter(item => item.types_product === 2)
                    .map(product => (
                      <Col sm="12" md="4" key={product._id}>
                        <div
                          className="product"
                          style={{
                            backgroundImage: "url(" + product.imgUrl + ")"
                          }}
                        >
                          <div className="product-text">
                            {product.name}{" "}
                            <span className="price">${product.price}</span>
                            <br />
                            <div className="product-hidden">
                              <small>{product.desc}. </small>
                              <Link
                                to={`/products/${product._id}`}
                                className="btn btn-outline-light"
                              >
                                Views
                              </Link>
                            </div>
                          </div>
                        </div>
                      </Col>
                    ))}
                </Row>
              </TabPane>
              <TabPane tabId="3">
                <Row className="mb-5">
                  {products
                    .filter(item => item.types_product === 3)
                    .map(product => (
                      <Col sm="12" md="4" key={product._id}>
                        <div
                          className="product"
                          style={{
                            backgroundImage: "url(" + product.imgUrl + ")"
                          }}
                        >
                          <div className="product-text">
                            {product.name}{" "}
                            <span className="price">${product.price}</span>
                            <br />
                            <div className="product-hidden">
                              <small>{product.desc}. </small>
                              <Link
                                to={`/products/${product._id}`}
                                className="btn btn-outline-light"
                              >
                                Views
                              </Link>
                            </div>
                          </div>
                        </div>
                      </Col>
                    ))}
                </Row>
              </TabPane>
              <TabPane tabId="4">
                <Row className="mb-5">
                  {products
                    .filter(item => item.types_product === 4)
                    .map(product => (
                      <Col sm="12" md="4" key={product._id}>
                        <div
                          className="product"
                          style={{
                            backgroundImage: "url(" + product.imgUrl + ")"
                          }}
                        >
                          <div className="product-text">
                            {product.name}{" "}
                            <span className="price">${product.price}</span>
                            <br />
                            <div className="product-hidden">
                              <small>{product.desc}. </small>
                              <Link
                                to={`/products/${product._id}`}
                                className="btn btn-outline-light"
                              >
                                Views
                              </Link>
                            </div>
                          </div>
                        </div>
                      </Col>
                    ))}
                </Row>
              </TabPane>
            </TabContent>
          </div>
        )}
      </Container>
    );
  }
}

Products.propTypes = {
  product: PropTypes.object.isRequired,
  getProducts: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  product: state.product
});

export default connect(
  mapStateToProps,
  { getProducts }
)(Products);
