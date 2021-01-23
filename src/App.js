import { BrowserRouter as Router, Switch, Route, Link, useLocation } from "react-router-dom";
import Homepage from './pages/Homepage'
import ResultPageView from './pages/search/player/PlayerResult'
import React from 'react';
import './App.css';

function App() {
  return (
    <Switch>
      <Route path="/" exact component={Homepage} />
      <Route path="/player/:playerID" component={ResultPageView} />
    </Switch>
  );
}

export default App;
