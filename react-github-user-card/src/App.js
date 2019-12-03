import React, { Component } from 'react';
import './App.css';
import Axios from 'axios';
import GhData from './components/GhData.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: []
    };
  }

componentDidMount() {
  Axios.get('https://api.github.com/users/jasynmarais')
    .then(res => {
      this.setState({ user: res.data });
    })
    .catch(err => {
      console.log(err);
    });
}

render() {
  return (
    <div>
      <h1>Wassup!</h1>
      <GhData userData={this.state.user} />
    </div>
    );
  }
}

export default App;
