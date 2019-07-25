import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from 'pages/home';
import Show from 'pages/show';
import Error from 'pages/error';

 const App = () => (
  <div className="app">
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/show/:id" component={Show} />
      <Route component={Error} />
    </Switch>
  </div>
 );

export default App;
