import React, { Component } from 'react';
import Home from './Home';
import Header from './Header';
import { Switch, Route, Redirect } from 'react-router-dom';
import Footer from './Footer';

class Main extends Component {
  render() {
    return (
      <div>
        <Header/>   
        <Switch>
            <Route path="/home" component={() => <Home/>} />
            <Redirect to="/home" />
        </Switch>
        <Footer/>
      </div>
    );
  }
}

export default Main;
