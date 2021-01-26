import { useState, useContext } from "react"
import BSButton from "./BSButton"
import BSTextInput from "./BSTextInput"
import PlayerContext from "../../context/player-context"
import React from "react";
import {
  useHistory, useRouteMatch
} from "react-router-dom";
import { searchPlayerByID } from "../../assets/utils/search-player";
const SearchInput = ({ slug }) => {

  const player = useContext(PlayerContext);
  const [searchText, setSearchText] = useState('');
  const { url } = useRouteMatch();
  const history = useHistory();

  const searchPlayer = () => {
    if (searchText.length < 6) return;
    else
      searchPlayerByID(searchText.toUpperCase(), url, history, player)
  }
  const isDisabled = searchText.length < 6



  return (<form className="form">
    <label className="form--label text-shadow">Type your ID to see details</label>
    <div className="search__field">
      <div className="search--field__shadow"></div>
      <BSTextInput placeholder="9U2PCULR" value={searchText}
        setInputText={({ target: { value } }) => setSearchText(value)}
      />
      <BSButton text="Enter" type="button" disabled={isDisabled}
        handleClick={searchPlayer}
      />

    </div>
  </form>)
}

export default SearchInput;