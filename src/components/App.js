import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
<<<<<<< HEAD
import GlobalStyles from './GlobalStyles';

import Header from './Header';
import Homepage from './Homepage';
import About from './About';
import ItemDetails from './ItemDetails'

const App = ({ items }) => {
=======
import styled from "styled-components";
import Header from './Header.js'

const Homepage = () => {
  return <div>Homepage</div>
}

const About = () => {
  return <div>About</div>
}

const App = () => {
>>>>>>> e08963abd6afa2a48cfbd3c5ed9438158da1d634
  return (
    <div>
      <GlobalStyles />
      <Router>
        <div>
          <Header />
          <Switch>
            <Route exact path='/'><Homepage items={items} /></Route>
            <Route exact path='/items/:itemId'><ItemDetails /></Route>
            <Route exact path='/about'><About /></Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;