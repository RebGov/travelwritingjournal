import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
import '../App.css'
import Logo from '../images/Logo.png';


//!userSignedIn === true ? sign in : userName
class Header extends Component {
  constructor(props) {
    super(props);
    this.state={
      error: null
    }
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

  handleClickLogOut = e => {
    e.preventDefault()
    localStorage.clear()
    this.props.history.push("/")
    this.props.userLogOut()
  }
  render() {

    return (
      <div className="App-header navbar-fixed-top" >
        <Navbar className='header-navbar' light expand="md" >
          <img src={Logo} className="App-logo" alt="Travel Writing Journal Logo" />
          <NavbarBrand style={{color: "#3e2723", "fontSize": "3em"  }}href="/">Travel Writing Journal</NavbarBrand>
          <NavbarToggler onClick={this.toggle}  />
          <Collapse  isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar >
              <UncontrolledDropdown  nav inNavbar>
                <DropdownToggle nav caret>

                {this.props.userSignedIn ? ( <div><h3 style={{color: "#3e2723"}}> Welcome {this.props.username}</h3><hr></hr><p>Menu</p></div> ) : (<div style={{color: "#3e2723"}}><h3 style={{color: "#3e2723"}}>Welcome</h3> <hr></hr> <p style={{color: "#3e2723"}}>Menu & Login</p></div>)}
                </DropdownToggle>

                <DropdownMenu right className="header-menu" >
                  <DropdownItem >
                    <Link style={{"textDecoration": "none", color: "#3e2723"}} to="/about">About Travel Writing</Link>
                  </DropdownItem>
                  <DropdownItem >
                    <Link style={{"textDecoration": "none", color: "#3e2723"}} to="/contact">Contact</Link>
                  </DropdownItem>
                  <hr></hr>
                  {!this.props.userSignedIn ? (
                    <React.Fragment>
                      <DropdownItem className="header-text" >
                        <Link style={{"textDecoration": "none", color: "#3e2723"}} to="/login" >Login</Link>
                      </DropdownItem>
                      <DropdownItem >
                        <Link style={{"textDecoration": "none", color: "#3e2723"}}  to="/signup">Create Account</Link>
                      </DropdownItem>

                    </React.Fragment>

                  ): (
                    <React.Fragment>
                  
                    <DropdownItem>
                    <Link  style={{"textDecoration": "none", color: "#3e2723"}}  to={`/${this.props.username}/profile`}>Profile</Link>
                    </DropdownItem>
                      <DropdownItem>
                        {this.props.userSignedIn ? ( <Link style={{"textDecoration": "none", color: "#3e2723"}}  to={`/${this.props.username}/journal_entries/current`}>Your Writings</Link> ) : null}
                      </DropdownItem>
                      <DropdownItem >
                     <Link style={{"textDecoration": "none", color: "#3e2723"}} to={`/${this.props.username}/journal_entries/new`}>New Travel Writing Story</Link>
                      </DropdownItem>

                      <hr></hr>
                      <DropdownItem onClick={this.handleClickLogOut}>
                        <p style={{color: "#3e2723"}}>Log Out</p>
                      </DropdownItem>
                    </React.Fragment>

                  )}

                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
export default withRouter(Header);
Navbar.propTypes = {
  light: PropTypes.bool,
  dark: PropTypes.bool,
  fixed: PropTypes.string,
  color: PropTypes.string,
  role: PropTypes.string,
  expand: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
  // pass in custom element to use
}
