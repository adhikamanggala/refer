import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Cookies from "universal-cookie";
import { onUserLogout } from "../actions/AuthAction";
import "../support/css/style.css";

const cookies = new Cookies();

class Header extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  onLogOutSelect = () => {
    this.props.onUserLogout();
    cookies.remove("dataUser");
  };

  render() {
    if (this.props.username === "") {
      return (
        <div>
          <Navbar light expand="md">
            <NavbarBrand href="/" style={{ color: "#ff9100" }} id="logo">
              Refer
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink
                    className="hvr-underline-from-center"
                    style={{ color: "#A9A9A9" }}
                  >
                    About
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className="hvr-underline-from-center"
                    style={{ color: "#A9A9A9" }}
                  >
                    List
                  </NavLink>
                </NavItem>
                <NavItem>
                  <a
                    style={{ textDecoration: "none" }}
                    href="/signup"
                    className="hvr-underline-from-center"
                  >
                    <NavLink style={{ color: "#A9A9A9" }}>Sign Up</NavLink>
                  </a>
                </NavItem>
                <NavItem>
                  <a
                    style={{ textDecoration: "none" }}
                    href="/login"
                    className="hvr-underline-from-center"
                  >
                    <NavLink style={{ color: "#A9A9A9" }}>Log In</NavLink>
                  </a>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      );
    } else {
      return (
        <Navbar light expand="md">
          <NavbarBrand href="/" style={{ color: "#ff9100" }} id="logo">
            refer
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink
                  style={{ color: "#A9A9A9" }}
                  className="hvr-underline-from-center"
                >
                  Itinerary
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle style={{ color: "#A9A9A9" }} nav caret>
                  Hello, {this.props.username}
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem style={{ color: "#A9A9A9" }}>
                    <Link to="/manageproduct">Manage Product</Link>
                  </DropdownItem>
                  <DropdownItem style={{ color: "#A9A9A9" }}>
                    Profile
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem
                    style={{ color: "#A9A9A9" }}
                    onClick={this.onLogOutSelect}
                  >
                    Logout
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      );
    }
  }
}
const mapStateToProps = state => {
  return { username: state.auth.username };
};

export default connect(
  mapStateToProps,
  { onUserLogout }
)(Header);
