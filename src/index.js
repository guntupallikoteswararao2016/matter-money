
import React, { Component } from 'react';
import { render } from 'react-dom';

const fetchData = () => {

  fetch('/api/items').then(function (a) {
    console.log("cllla>>.", a.re)
  })
}

class App extends Component {
  state = {
    users: []
  }

  componentDidMount() {
    fetch('/api/items')
      .then(res => {
        console.log(res);
        return res.json()
      })
      .then(users => {
        console.log(users);
        this.setState({ users })
      });
  }

  render() {
    return (<div className="jumbotron text-center">
      Please do work through the Getting Started soon by Guntupalli  sivasankar

        <p>hostname::{window.location.hostname}</p>
      {
        this.state.users.map(({ pin, name }) => <div>
          <p>Name:{name}</p>
          <p>pin{pin}</p>
        </div>)
      }
    </div>);
  }

}

render(<App />, document.getElementById('root'));
