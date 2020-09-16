import React from "react";
import Search from "../../../components/Search";
import { Avatar } from "@material-ui/core";

const Header: React.FC = () => {
  return (
    <div className="ml-shadow ml-flex ml-items-center ml-bg-white ml-w-full ml-z-9999 ml-px-4 ml-fixed">
      <div className="ml-text-5xl ml-font-chalkboard ml-text-blue-500">
        QueryX
      </div>
      <Search />
      <Avatar
        className="ml-m-2 ml-h-7 ml-w-7"
        alt="round"
        src="https://i.loli.net/2020/06/01/2uHvPFcdwAb3tRi.png"
      />
    </div>
  );
};

export default Header;
