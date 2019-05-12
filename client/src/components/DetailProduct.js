import React, { Component } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";

// Actions
import { loadDetailProduct } from "../actions/productActions";

class DetailProduct extends Component {
  componentDidMount() {
    this.props.loadDetailProduct(this.props.id);
  }

  render() {
    const { detailProduct } = this.props.product;

    return (
      <Container>
        {detailProduct.length > 0 &&
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
                <Button outline color="danger" block>
                  <i className="fas fa-cart-plus mr-2" /> Buy
                </Button>
              </Col>
            </Row>
          ))}
        {detailProduct.length === 0 && "No Product"}
      </Container>
    );
  }
}

DetailProduct.propTypes = {
  product: PropTypes.object.isRequired,
  loadDetailProduct: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  product: state.product
});

export default connect(
  mapStateToProps,
  { loadDetailProduct }
)(DetailProduct);
