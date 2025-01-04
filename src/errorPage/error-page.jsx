import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";
import './errorPage.css'

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="error_page_container">
      <div className="max_width error_page_info">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <Link to="/">
          You can go back to the home page by clicking here, though!
        </Link>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </div>
  );
}
