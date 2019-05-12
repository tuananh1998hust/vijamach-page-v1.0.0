import React, { Component } from "react";
import { Container, Row, Col, Table, Spinner, Button } from "reactstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";

// Components
import FormSupport from "../components/FormSupport";
// Action
import { deleteCartItem } from "../actions/productActions";

class Carts extends Component {
  onDeleteClick = id => {
    this.props.deleteCartItem(id);
  };

  render() {
    const { carts, loading } = this.props.product;

    return (
      <Container>
        <h2 className="text-center mb-5">SHOPPING CARTS</h2>

        {loading === true ? (
          <Spinner style={{ width: "3rem", height: "3rem" }} />
        ) : carts.length ? (
          <Row className="mb-5">
            <Col className="mb-2" sm="12" md="8">
              <Table hover>
                <thead>
                  <tr>
                    <th className="text-secondary">Images</th>
                    <th className="text-secondary">Products</th>
                    <th className="text-secondary">Price</th>
                  </tr>
                </thead>
                <tbody>
                  {carts.map((cart, index) => (
                    <tr key={index}>
                      <td>
                        <img
                          alt="product"
                          className="img-fluid"
                          src={cart.imgUrl}
                        />
                      </td>
                      <td>
                        <h3 className="mb-1">{cart.name}</h3>
                      </td>
                      <td className="d-flex align-items-center">
                        <p className="mr-2 mb-0">${cart.price}</p>
                        <Button
                          size="sm"
                          color="danger"
                          onClick={this.onDeleteClick.bind(this, cart._id)}
                        >
                          &times;
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Col>
            <Col className="mb-2" sm="12" md="4">
              <h1 className="text-danger mb-2">
                Total: ${" "}
                {carts.reduce((total, cart) => {
                  return (total += cart.price);
                }, 0)}
              </h1>
              <FormSupport />
            </Col>
          </Row>
        ) : (
          <p>No Products In Carts </p>
        )}
      </Container>
    );
  }
}

Carts.propTypes = {
  product: PropTypes.object.isRequired,
  deleteCartItem: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  product: state.product
});

export default connect(
  mapStateToProps,
  { deleteCartItem }
)(Carts);
