import React from 'react';
import { connect } from 'react-redux';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

class Header extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props);
    }

    //Not firing rerender?
    loggedInNavbar = () => {
        return (
            <Navbar expand="lg" id="cappucino-3"> 
                <Navbar.Brand id="cappucino-1-text-bold">vou | voting for you</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/dashboard">Dashboard</Nav.Link>
                        <Nav.Link href="/voting">Voting</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }

    loginHeader = () => {
        return (
            <Navbar id="cappucino-3" variant="dark">
                <Navbar.Brand id="cappucino-1-text-bold">
                    vou
                            <img
                        alt=""
                        src="./images/logo.png"
                        width="30"
                        height="30"
                    // className="d-inline-block align-top"
                    />
                </Navbar.Brand>
            </Navbar>
        );
    }

    render() {
        return (
            <div className="header">
                {this.props.loggedIn ?
                    this.loggedInNavbar()
                    :
                    this.loginHeader()
                }
            </div>
        );
    }
}

const mapStateToProps = function (state) {
    return {
        username: state.auth.username,
        loggedIn: state.auth.loggedIn
    }
}

export default connect(mapStateToProps)(Header);