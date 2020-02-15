
import React, { Component } from 'react';
import { render } from 'react-dom';

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
          <span>{name} -{pin}</span>
        </div>)
      }
    </div>);
  }

}

render(<App />, document.getElementById('root'));
