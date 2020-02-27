
import React, { Component } from 'react';
import { render } from 'react-dom';
import { Route, BrowserRouter } from 'react-router-dom'
import ProfileFullView from './profile-full-view';
import DashBoard from './dash-board';
import Header from './header';
import Banner from './banner'
import Login from './login'
import Footer from './footer'
import rootReducer from './store-room';
import Register from './registration'

import {createStore} from 'redux';
import {Provider} from 'react-redux';

const store = createStore(rootReducer);

const UiRoute = () => {

  return (
    <BrowserRouter>
      <div>
        <Header />
        <Route exact path="/dashboard" component={DashBoard} />
        <Route exact path="/profile/:id" component={ProfileFullView} />
        <Route exact path="/" component={Login} />
        <Route exact path="/register" component={Register} />
        <Footer/>
      </div>
    </BrowserRouter >
  )
}


class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <UiRoute />
      </Provider>);
  }

}


render(<App />, document.getElementById('root'));
