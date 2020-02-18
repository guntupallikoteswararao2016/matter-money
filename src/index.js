
import React, { Component, useEffect } from 'react';
import { render } from 'react-dom';
import { Route, BrowserRouter } from 'react-router-dom'
import Profile from './router/profile';
import Home from './router/home';

const UiRoute = () => {

  return (
    <BrowserRouter>
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/profile/:id" component={Profile} />
      </div>
    </BrowserRouter >
  )
}


class App extends Component {

  render() {
    return (
      <div className="jumbotron text-center">
        <UiRoute />
      </div>);
  }

}


render(<App />, document.getElementById('root'));
