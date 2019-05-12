import React, { Component } from "react";
import { Button, Form, FormGroup, Input } from "reactstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";

// Actions
import { addMessage } from "../actions/messageActions";

class FormSupport extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phone: "",
      mess: ""
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const { carts } = this.props;

    const { name, email, phone, mess } = this.state;

    if (carts) {
      console.log(carts, name, email, phone, mess);

      this.setState({
        name: "",
        email: "",
        phone: "",
        mess: ""
      });

      return;
    }

    const newMess = {
      name,
      email,
      phone,
      mess
    };

    this.props.addMessage(newMess);

    this.setState({
      name: "",
      email: "",
      phone: "",
      mess: ""
    });
  };

  render() {
    return (
      <Form onSubmit={this.onSubmit}>
        <FormGroup>
          <Input
            className="mb-2"
            type="text"
            name="name"
            placeholder="Name"
            value={this.state.name}
            onChange={this.onChange}
          />
          <Input
            className="mb-2"
            type="email"
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.onChange}
          />
          <Input
            className="mb-2"
            type="phone"
            name="phone"
            placeholder="Phone"
            value={this.state.phone}
            onChange={this.onChange}
          />
          <Input
            className="mb-2"
            type="textarea"
            name="mess"
            placeholder="Messenger"
            value={this.state.mess}
            onChange={this.onChange}
          />
          <Button outline color={this.props.color} block>
            Send
          </Button>
        </FormGroup>
      </Form>
    );
  }
}

FormSupport.propTypes = {
  addMessage: PropTypes.func.isRequired
};

export default connect(
  null,
  { addMessage }
)(FormSupport);
