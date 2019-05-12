import React, { Component } from "react";
import { Container, Row, Col, Table, Spinner } from "reactstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";

// Components
import FormSupport from "../components/FormSupport";

class Carts extends Component {
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
                      <td>${cart.price}</td>
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
  product: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  product: state.product
});

export default connect(mapStateToProps)(Carts);
