import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from "styled-components";
import Header from './Header.js'

const Homepage = () => {
  return <div>Homepage</div>
}

const About = () => {
  return <div>About</div>
}

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/'><Homepage /></Route>
        <Route exact path='/about'><About /></Route>
      </Switch>
    </Router>
  );
};

export default App;