import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './containers/Home/Home';
import HallOfFame from './containers/HallOfFame/HallOfFame';
import Footer from './components/Footer/Footer';

import './styles/App.scss';

const App = () => (
  <div className="app">
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/hall-of-fame">
          <HallOfFame />
        </Route>
      </Switch>
    </BrowserRouter>

    <Footer />
  </div>
);

export default App;
