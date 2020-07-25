import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import GlobalStyles from './GlobalStyles';

import Header from './Header';
import Homepage from './Homepage';
import About from './About';
import ItemDetails from './ItemDetails'

const App = ({ items }) => {

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