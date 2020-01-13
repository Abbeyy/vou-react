import React from 'react';
import { connect } from 'react-redux';
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
import { Jumbotron, Badge } from 'react-bootstrap';

import './App.css';
import './vou.css';

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
            <Jumbotron id="cappucino-1">
            <Dashboard></Dashboard>
            </Jumbotron>
            <Footer></Footer>
          </div>
          : <div>
            <Header></Header>
            <Jumbotron id="cappucino-1">
            <Login></Login>
            </Jumbotron>
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
            <Jumbotron id="cappucino-1">
            <Dashboard></Dashboard>
            </Jumbotron>
            <Footer></Footer>
          </div>
          : <div>
            <Header></Header>
            <Jumbotron id="cappucino-1">
            {this.errorMessage("You must login before you can access the dashboard.")}
            <Login></Login>
            </Jumbotron>
            <Footer></Footer>
          </div>
        }
      </div>
    );
  }

  errorMessage = (msg) => {
    return (
      <div>
        <h3><Badge id="error-msg">{msg}</Badge></h3>
        <br></br>
        <br></br>
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

