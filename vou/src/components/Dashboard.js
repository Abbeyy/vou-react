import React from 'react';
import { connect } from 'react-redux';
import DashboardMap from './DashboardMap';

class Dashboard extends React.Component {
    constructor(props) {
        super();
        console.log(props);
    }
    
    render() {
        return(
            <div className="Dashboard">
                <span>Dashboard here</span>
                <DashboardMap></DashboardMap>
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
