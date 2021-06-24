import React, {Component} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navigation from "./components/Nav";

import Home from './components/Home';
import User from './components/User';
import NotFound from './components/NotFound';
import About from './components/About';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        {/**
         * All the routes below
         */}
        
        <Navigation />

        <Switch>
          <Route path='/' component={Home} exact={true} />
          <Route path='/about' component={About} exact={true} />
          <Route path="/user/:username" component={User} />
          <Route component={NotFound} />
        </Switch>

      </BrowserRouter>
    )
  }
}

export default App;