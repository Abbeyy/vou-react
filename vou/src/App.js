import React from 'react';
import './App.css';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import {
  BrowserRouter as Router,
  Switch,
  Route
  // Link
} from "react-router-dom";

class App extends React.Component {
  constructor() {
    super();
    this.state = { loggedin: false };
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/">
              <Login></Login>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/dashboard">
              {this.state.loggedin ?
                <Dashboard></Dashboard>
              : <div>
                <span>You need to login before you can access the dashboard.</span>
                <Login></Login>
              </div>
              }
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;