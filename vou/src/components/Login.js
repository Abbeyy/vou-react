import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from 'react-bootstrap';
import { connect } from 'react-redux';

import { logIn } from '../js/actions/index';

class Login extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props);
        this.state = {username:'', password: ''}
    }

    onChangeText = (e) => {
        if (e.name === 'username') {
            this.setState({username: e.target.value});
        } else {
            this.setState({password: e.target.value}); //encrypt within app?
        }
    }

    validateLogin = (e) => {
        //Use async to speak to backend to verify login.
        //For now, forces accept.

        //How to handle from here? redirect user to /dashboard and set loggedIn state where, to true?
        this.props.logIn();
    }

    render() {
        return (
            <div className="Login">
                <Form name="loginForm">
                    <Form.Group name="usernameGroup" controlId="formBasicEmail">
                        <Form.Label id="cappucino-2-text-bold">Username</Form.Label>
                        <Form.Control name="username" type="text" placeholder="Enter Username" onChange={this.onChangeText}/>
                    </Form.Group>
                    <Form.Group name="passwordGroup" controlId="formBasicPassword">
                        <Form.Label id="cappucino-2-text-bold">Password</Form.Label>
                        <Form.Control name="password" type="password" placeholder="Password" onChange={this.onChangeText}/>
                    </Form.Group>
                    {/* <Form.Group name="keepLoggedInGroup" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Keep me logged in?" />
                    </Form.Group> */}
                    <br></br>
                    <br></br>
                    <Button id="login-button" onClick={this.validateLogin}>
                        Log In
                    </Button>
                </Form>
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

  const mapDispatchToProps = {
    logIn,
   };
  
export default connect(mapStateToProps, mapDispatchToProps)(Login);

  