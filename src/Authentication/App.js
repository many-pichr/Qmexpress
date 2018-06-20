import React, { Component } from 'react';
import './App.css';
import fire from './config/Fire';
import Home from './Home';
import Login from './Login';
import Loading from './Loading';
import { Redirect } from 'react-router-dom';
class App extends Component {
  constructor() {
    super();
    this.state = ({
      user: null,
      page:0,
    });
    this.authListener = this.authListener.bind(this);
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        this.setState({ user,page:1 });
        localStorage.setItem('user', user.uid);
      } else {
        this.setState({ user: null,page:2 });
        localStorage.removeItem('user');
      }
    });
  }

  render() {
    return (
      <div className="App">
        {this.state.page ==1 ? (  
         <Redirect to="/dashboard" />
        ) :null}
          {this.state.page ==2 ? (
         <Login />
        ) :null}
         {this.state.page ==0 ? (
          <Loading />
          ): null}
      </div>

    );
  }
}

export default App;
