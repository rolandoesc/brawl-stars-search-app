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
      setSearchText(`${slug}`)
    }

  }, [])


  const searchPlayer = () => {
    if (searchText.length !== 8) return;
    else
      searchPlayerByID(searchText.toUpperCase())
    // else searchBrawlChampeon(playerID)
  }

  const searchPlayerByID = async (playerID) => {
    try {
      const response = await getPlayerDetails(playerID)
      console.log('%c This is the Response', 'color: orange; font-size: 18px', response)
      history.push(`/player/${playerID}`)
      
    } catch (error) {
      console.error(error)
    }
  }
  const isDisabled = searchText.length !== 8



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