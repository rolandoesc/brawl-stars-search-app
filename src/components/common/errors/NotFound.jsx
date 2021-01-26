import DefaultLayout from "../../../layouts/default";
import { Link } from "react-router-dom";
import BSButton from "../BSButton";
const NotFound = () => {
  const NotFoundView = (<div className="not-found__view">
    <span className="error__text title">We're sorry, but we couldn't find any result. 😢</span>
    <Link to="/">
      <BSButton text="Go back" />
    </Link>
  </div>)
  return <DefaultLayout view={NotFoundView} />
}

export default NotFound;