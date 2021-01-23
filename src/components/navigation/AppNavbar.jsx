import logotype from "../../assets/images/logo-1.png"
const AppNavbar = () => {
  return (<nav className="app__navigation">
    <div></div>
    <div className="relative">
      <img src={logotype} alt="Brawl Stars Logotype" className="w-auto"/>
    </div>
    <div></div>
  </nav>)
}

export default AppNavbar;