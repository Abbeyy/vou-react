import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from 'react-bootstrap';

class Login extends React.Component {
    constructor(props) {
        super();
        this.props = props;
        this.state = {username: '', password: ''};
    }

    onChangeText = (e) => {
        if (e.name === 'username') {
            this.setState({username: e.target.value});
        } else {
            this.setState({password: e.target.value}); //encrypt within app?
        }
    }

    render() {
        return (
            <div className="Login">
                <Form name="loginForm">
                    <Form.Group name="usernameGroup" controlId="formBasicEmail">
                        <Form.Label>Username</Form.Label>
                        <Form.Control name="username" type="text" placeholder="Enter Username" onChange={this.onChangeText}/>
                    </Form.Group>
                    <Form.Group name="passwordGroup" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control name="password" type="password" placeholder="Password" onChange={this.onChangeText}/>
                    </Form.Group>
                    {/* <Form.Group name="keepLoggedInGroup" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Keep me logged in?" />
                    </Form.Group> */}
                    <Button variant="primary" type="submit">
                        Log In
                    </Button>
                </Form>
            </div>
        );
    }
}

export default Login;