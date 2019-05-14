import React, { Component } from "react";
import {
  Container,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import classnames from "classnames";

// Componnents
import AllProduct from "../components/AllProduct";
import MechanicProduct from "../components/MechanicProduct";
import AutomaticProduct from "../components/AutomaticProduct";
import ItProduct from "../components/ItProduct";
import HumanResourceProduct from "../components/HumanResourceProduct";

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

  render() {
    return (
      <Container>
        <h2 className="text-center mb-5">OUR PRODUCTS</h2>

        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "0" })}
              onClick={() => {
                this.toggle("0");
              }}
            >
              ALL
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "1" })}
              onClick={() => {
                this.toggle("1");
              }}
            >
              MECHANIC
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "2" })}
              onClick={() => {
                this.toggle("2");
              }}
            >
              AUTOMATIC
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "3" })}
              onClick={() => {
                this.toggle("3");
              }}
            >
              WEB & APP
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "4" })}
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
            <AllProduct />
          </TabPane>
          <TabPane tabId="1">
            <MechanicProduct />
          </TabPane>
          <TabPane tabId="2">
            <AutomaticProduct />
          </TabPane>
          <TabPane tabId="3">
            <ItProduct />
          </TabPane>
          <TabPane tabId="4">
            <HumanResourceProduct />
          </TabPane>
        </TabContent>
      </Container>
    );
  }
}

export default Products;
