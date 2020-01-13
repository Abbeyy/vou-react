import React from 'react';
import { connect } from 'react-redux';

class Dashboard extends React.Component {
    constructor(props) {
        super();
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

const mapStateToProps = function (state) {
    return {
      username: state.auth.username,
      loggedIn: state.auth.loggedIn
    }
  }

export default connect(mapStateToProps)(Dashboard);
