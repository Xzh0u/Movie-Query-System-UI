import React from "react";
import Search from "../../../components/Search";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilm } from "@fortawesome/free-solid-svg-icons";
import { Avatar } from "@material-ui/core";

const Header: React.FC = () => {
  return (
    <div className="shadow flex items-center bg-white w-full z-9999 fixed top-0">
      <FontAwesomeIcon className="ml-16" icon={faFilm} color="gray" size="lg" />
      <div className="tracking-wide text-lg px-2 mr-10 py-4 font-sans text-blue-500 font-black">
        Movie Awesome
      </div>
      <Search />
      <Avatar
        className="m-2 h-9 w-9 absolute right-25"
        alt="round"
        src="https://i.loli.net/2020/06/01/2uHvPFcdwAb3tRi.png"
      />
    </div>
  );
};

export default Header;
