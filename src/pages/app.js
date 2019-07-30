import React from 'react';
import {Route, Switch, NavLink} from 'react-router-dom';
import Home from 'pages/home';
import Show from 'pages/show';
import Error from 'pages/error';

 const App = () => (
  <div className="app">
    <NavLink to="/">
      <h1 className="nav__logo font--white">
        <span className="font--blue">
          TV&nbsp;
        </span>
        BLAND
      </h1>
    </NavLink>

    <div className="app__wrapper">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/show/:id" component={Show} />
        <Route component={Error} />
      </Switch>
    </div>
  </div>
 );

export default App;
