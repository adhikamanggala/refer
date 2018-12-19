import React, { Component } from 'react'; 
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
      } from 'reactstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import  Cookies  from 'universal-cookie';
import { onUserLogout, keepLogin } from "../actions";

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
        cookies.remove('dataUser');
    }

    render () {
        if(this.props.username === "") {
            return (
                <div>
                    <Navbar color="light" light expand="md">
                        <NavbarBrand href="/" style={{ color:'#ff9100'}} id="logo">refer</NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <NavLink className="hvr-underline-from-center">About</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="hvr-underline-from-center">List</NavLink>
                                </NavItem>
                                <NavItem >
                                    <a style={{textDecoration:'none'}} href="/signup" className="hvr-underline-from-center"><NavLink>Sign Up</NavLink></a>
                                </NavItem>
                                <NavItem >
                                    <a style={{textDecoration:'none'}} href="/login" className="hvr-underline-from-center"><NavLink>Log In</NavLink></a>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Navbar>
                </div>
            )
        }else {
            return(
            <Navbar color="light" light expand="md">
                        <NavbarBrand href="/" id='logo'>refer</NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <NavLink className="hvr-underline-from-center">Movies</NavLink>
                                </NavItem>
                                <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                Hello, {this.props.username}
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem>
                                        <Link to="/manageproduct">Manage Product</Link>
                                    </DropdownItem>
                                    <DropdownItem>
                                        Status
                                    </DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem onClick={this.onLogOutSelect}>
                                        Logout
                                    </DropdownItem>
                                </DropdownMenu>
                         </UncontrolledDropdown>
                            </Nav>
                        </Collapse>
                    </Navbar>
            )
        }
    }
}
const mapStateToProps = (state) => {
    return { username: state.auth.username }
}

export default connect(mapStateToProps, {onUserLogout, keepLogin})(Header);