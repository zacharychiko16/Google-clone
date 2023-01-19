import React from "react";
import "./SearchPage.css";
import { useStateValue } from "../StateProvider";
import useGoogleSearch from "../useGoogleSearch";
import Response from "./response.js";
import { Link } from "react-router-dom";
import Search from "../components/Search";

function SearchPage() {
  const [{ term }, dispatch] = useStateValue();
  // const {data} = useGoogleSearch(term)

  const data = Response;

  console.log(data);
  return (
    <div className="searchPage">
      <div className="seacrhPage__header">
        <Link to="/">
          <img
            className="searchPage__logo"
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
            alt="Google__Logo"
          />
        </Link>

        <div className="searchPage__headerBody">
          <Search hideButtons />
        </div>

        <div className="searchPage__results"></div>
      </div>
    </div>
  );
}

export default SearchPage;
