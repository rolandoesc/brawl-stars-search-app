const BSTextInput = ({placeholder, setInputText}) => {
  return (<input className="search--field__input" type="text" placeholder={placeholder} aria-label="Brawler Name or ID" onInput={setInputText}/>)
}

export default BSTextInput;