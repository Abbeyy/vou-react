import React from 'react';

class Login extends React.Component {
    constructor(props) {
        super();
        this.props = props;
        console.log(props);
    }
    
    render() {
        return(
            <div className="Dashboard">
                <span>Dashboard here</span>
            </div>
        );
    }
}

export default Login;