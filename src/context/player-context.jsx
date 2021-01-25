import React from "react";

const PlayerContext = React.createContext({
  playerDetails: {},
  setPlayerDetails: () => {}
})

export default PlayerContext;