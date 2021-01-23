import { useState, useEffect } from "react"
import getPlayerDetails from "../../services/api.handlers";
import BSButton from "./BSButton"
import BSTextInput from "./BSTextInput"
import React from "react";
import {
  useHistory
} from "react-router-dom";
const SearchInput = ({ slug }) => {
  const [searchText, setSearchText] = useState('');
  const history = useHistory();
  useEffect(() => {
    if (slug) {
      setSearchText(`#${slug}`)
    }

  }, [])


  const searchPlayer = () => {
    if (!searchText.length) return;
    if (searchText[0] === '#')
      searchPlayerByID(searchText)
    // else searchBrawlChampeon(playerID)
  }

  const searchPlayerByID = (playerID) => {
    // getPlayerDetails(playerID)
    history.push(`/player/${playerID.substring(1)}`)
  }
  const isDisabled = !searchText.length



  return (<form className="form">
    <label className="form--label text-shadow">Type your ID to see details</label>
    <div className="search__field">
      <div className="search--field__shadow"></div>
      <BSTextInput placeholder="#9U2PCULR" value={searchText}
        setInputText={({ target: { value } }) => setSearchText(value)}
      />
      <BSButton text="Enter" type="button" disabled={isDisabled}
        handleClick={searchPlayer}
      />

    </div>
  </form>)
}

export default SearchInput;