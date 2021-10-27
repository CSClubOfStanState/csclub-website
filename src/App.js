import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import NavBar from './components/NavBar/NavBar';
import Home from './containers/Home/Home';
import HallOfFame from './containers/HallOfFame/HallOfFame'
import Footer from './components/Footer/Footer';


const App = () => {
  return (
    <div className="app">
      <NavBar></NavBar>

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
      
      <Footer></Footer>
    </div>
  );
}

export default App;
