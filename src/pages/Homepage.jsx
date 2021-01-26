import DefaultLayout from "../layouts/default"
import SearchInput from "../components/common/SearchInput"
import ResultPageView from "./search/player/PlayerResult"
const InitialPageView = () => {
  return (<div className="main--holder">
    <div>
      <p className="title uppercase text-shadow">Brawl Stars Searcher App</p>
      <SearchInput/>
    </div>
  </div>)
}


const Homepage = () => {
  return (<DefaultLayout view={<InitialPageView/>}/>)
}

export default Homepage;