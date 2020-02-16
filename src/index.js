
import React, { Component } from 'react';
import { render } from 'react-dom';
import { Route, BrowserRouter } from 'react-router-dom'
import Profile from './profile';
import Home from './home';

const UiRoute = () => {

  return (
    <BrowserRouter>
      <div>
        <Route exact path="/" component = {Home} />
        <Route exact path="/profile/:id" component = {Profile} />
      </div>
      </BrowserRouter >
  )
}


class App extends Component {
  state = {
    users: []
  }

  componentDidMount() {
    fetch('/profile')
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
    return (
    <div className="jumbotron text-center">
      <UiRoute/>
    </div>);
  }

}

render(<App />, document.getElementById('root'));
