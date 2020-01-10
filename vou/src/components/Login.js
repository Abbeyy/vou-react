import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from 'react-bootstrap';

class Login extends React.Component {
    constructor(props) {
        super();
        this.props = props;
        this.state = {username: '', password: ''};
    }
    render() {
        return (
            <div className="Login">
                <Form name="loginForm">
                    <Form.Group name="usernameGroup" controlId="formBasicEmail">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" placeholder="Enter Username" />
                    </Form.Group>
                    <Form.Group name="passwordGroup" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />

                    </Form.Group>
                    <Form.Group name="keepLoggedInGroup" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Keep me logged in?" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Log In
                    </Button>
                </Form>
            </div>
        );
    }
}

export default Login;