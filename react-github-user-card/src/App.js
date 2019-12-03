import React, { Component } from 'react';
import './App.css';
import Axios from 'axios';
import GhCard from './components/GhCard';

class App extends Component {
  constructor() {
    super();
  // console.log('constructor');

    this.state = {
      user: {},
      followers: []
    };
  }

componentDidMount() {
 // console.log('DidMount');
  Axios.get('https://api.github.com/users/jasynmarais')
    .then(res => {
      this.setState({ user: res.data });
    })
    .catch(err => {
      console.log(err);
    });
  Axios.get('https://api.github.com/users/jasynmarais/followers')
    .then(res => {
      this.setState({ followers: res.data });
    })
    .catch(err => {
      console.log(err);
    });
}

render() {
 // console.log('render');
  return (
    <div>
      <h1>My React Github User Card!</h1>
      <GhCard user={this.state.user} followers={this.state.followers} />
    </div>
    );
  }
}

export default App;
