import { BrowserRouter as Router, Switch, Route, Link, useLocation } from "react-router-dom";
import Homepage from './pages/Homepage'
import ResultPageView from './pages/search/player/PlayerResult'
import React, { useState } from 'react';
import './App.css';
import PlayerBrawlersList from "./pages/search/player/brawlers/PlayerBrawlers";
import PlayerContext from "./context/player-context";
import NotFound from "./components/common/errors/NotFound";

function App() {
  const [playerDetails, setPlayerDetails] = useState({})
  const value = { playerDetails, setPlayerDetails }
  return (
    <PlayerContext.Provider value={value}>
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route exact path="/player/:playerID" component={ResultPageView} />
        <Route exact path="/player/:playerID/brawlers" component={PlayerBrawlersList} />
        <Route exact path="/error/404" component={NotFound} />
      </Switch>
    </PlayerContext.Provider>
  );
}

export default App;
