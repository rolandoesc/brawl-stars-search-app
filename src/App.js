import { BrowserRouter as Router, Switch, Route, Link, useLocation } from "react-router-dom";
import Homepage from './pages/Homepage'
import ResultPageView from './pages/search/player/PlayerResult'
import React from 'react';
import './App.css';
import PlayerBrawlersList from "./pages/search/player/brawlers/PlayerBrawlers";

function App() {
  return (
    <Switch>
      <Route path="/" exact component={Homepage} />
      <Route exact path="/player/:playerID" component={ResultPageView} />
      <Route exact path="/player/:playerID/brawlers" component={PlayerBrawlersList} />
    </Switch>
  );
}

export default App;
