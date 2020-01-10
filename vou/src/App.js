import React from 'react';
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
              <div>
                <Header></Header>
                <Login></Login>
                <Footer></Footer>
              </div>
            </Route>
            <Route path="/login">
              <div>
                <Header></Header>
                <Login></Login>
                <Footer></Footer>
              </div>            </Route>
            <Route path="/dashboard">
              {this.state.loggedin ?
                <div>
                  <Header></Header>
                  <Dashboard></Dashboard>
                  <Footer></Footer>
                </div>
              : <div>
                  <Header></Header>
                  <span>You need to login before you can access the dashboard.</span>
                  <Login></Login>
                  <Footer></Footer>              </div>
              }
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;