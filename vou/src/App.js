import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import Footer from './components/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route
  // Link
} from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }

  produceLogin = () => {
    return (
      <div>
        {this.props.loggedIn ?
          <div>
            <Header></Header>
            <Dashboard></Dashboard>
            <Footer></Footer>
          </div>
          : <div>
            <Header></Header>
            <Login></Login>
            <Footer></Footer>
          </div>
        }
      </div>
    );
  }

  produceLoginWithWarning = () => {
    return (
      <div>
        {this.props.loggedIn ?
          <div>
            <Header></Header>
            <Dashboard></Dashboard>
            <Footer></Footer>
          </div>
          : <div>
            <Header></Header>
            <span>You need to login before you can access the dashboard.</span>
            <Login></Login>
            <Footer></Footer>
          </div>
        }
      </div>
    );
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/">
              {this.produceLogin}
            </Route>
            <Route path="/login">
            {this.produceLogin}
            </Route>
            <Route path="/dashboard">
            {this.produceLoginWithWarning}
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = function (state) {
  return {
    username: state.auth.username,
    loggedIn: state.auth.loggedIn
  }
}

export default connect(mapStateToProps)(App);

