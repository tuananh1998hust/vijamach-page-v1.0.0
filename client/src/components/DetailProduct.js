import React, { Component } from "react";
import { Container, Row, Col, Button, Spinner } from "reactstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";

// Actions
import { loadDetailProduct, addToCart } from "../actions/productActions";

class DetailProduct extends Component {
  componentDidMount() {
    this.props.loadDetailProduct(this.props.id);
  }

  onAddToCartClick = product => {
    this.props.addToCart(product);
  };

  render() {
    const { detailProduct, loading } = this.props.product;

    return (
      <Container>
        {loading === true ? (
          <Spinner className="mb-5" style={{ width: "3rem", height: "3rem" }} />
        ) : (
          detailProduct.map(product => (
            <Row className="mb-5" key={product._id}>
              <Col className="mb-2" sm="6" md="3">
                <img
                  alt="detail product"
                  className="img-fluid"
                  src={product.imgUrl}
                />
              </Col>
              <Col className="mb-2" sm="6" md="3">
                <h3 className="mb-1">{product.name}</h3>
                <p className="text-secondary">{product.desc}</p>
              </Col>
              <Col className="mb-2" sm="6" md="3">
                <div className="d-flex align-items-center">
                  <i className="fas fa-check" />
                  <p className="ml-2 mb-0">high quality</p>
                </div>
                <div className="d-flex align-items-center">
                  <i className="fas fa-check" />
                  <p className="ml-2 mb-0">high quality</p>
                </div>
                <div className="d-flex align-items-center">
                  <i className="fas fa-check" />
                  <p className="ml-2 mb-0">high quality</p>
                </div>
              </Col>
              <Col className="mb-2" sm="6" md="3">
                <div className="d-flex align-items-center">
                  <p className="text-secondary mb-1">price:</p>
                  <h3 className="text-danger mb-1 ml-2">${product.price}</h3>
                </div>
                <Button
                  outline
                  color="danger"
                  block
                  onClick={this.props.addToCart.bind(this, product)}
                >
                  <i className="fas fa-cart-plus mr-2" /> Buy
                </Button>
              </Col>
            </Row>
          ))
        )}
      </Container>
    );
  }
}

DetailProduct.propTypes = {
  product: PropTypes.object.isRequired,
  loadDetailProduct: PropTypes.func.isRequired,
  addToCart: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  product: state.product
});

export default connect(
  mapStateToProps,
  { loadDetailProduct, addToCart }
)(DetailProduct);
