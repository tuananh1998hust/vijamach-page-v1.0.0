import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

// Actions
import { getProducts } from "../actions/productActions";

class Products extends Component {
  componentDidMount() {
    this.props.getProducts();
  }

  render() {
    const { products } = this.props.product;

    return (
      <Container>
        <h2 className="text-center mb-5">OUR PRODUCTS</h2>
        <Row className="mb-5">
          {products.map(product => (
            <Col sm="12" md="4" key={product._id}>
              <div
                className="product"
                style={{ backgroundImage: "url(" + product.imgUrl + ")" }}
              >
                <div className="product-text">
                  {product.name} <span className="price">${product.price}</span>
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
