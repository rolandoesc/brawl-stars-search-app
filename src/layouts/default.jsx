import AppNavbar from '../components/navigation/AppNavbar';
const DefaultLayout = ({view}) => {
  return (
    <div className="BS__holder BS--holder__gradient">
      <div className="BS--skulls__background">
        <div className="BS--skulls__wrapper">
          <div className="skulls__background"></div>
        </div>

      </div>
      <AppNavbar/>
      <div className="layout__view">
        {view}
      </div>
    </div>
  );
}
export default DefaultLayout;