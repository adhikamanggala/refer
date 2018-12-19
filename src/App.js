import React, { Component } from 'react';
import Header from './components/Header';
import Login from './components/Login';
import Home from './components/Home';
import Register from './components/Register';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './support/css/HoverRefer.css'
import './App.css';


class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        
        <div>
          <Route exact path="/" component={Home}/>
          <Route path="/login" component={Login}/>
          <Route path="/signup" component={Register}/>
        </div>  
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { cookie: state.auth.cookie }
}

export default withRouter(connect(mapStateToProps)(App));
