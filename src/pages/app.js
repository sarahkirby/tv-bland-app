import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from 'pages/home';
import Error from 'pages/error';

 const App = () => (
  <div className="app">
    <Switch>
      <Route exact path="/" component={Home} />
      <Route component={Error} />
    </Switch>
  </div>
 );

export default App;
