import React from "react";
import Search from "../../../components/Search";
import { Avatar } from "@material-ui/core";

const Header: React.FC = () => {
  return (
    <div className="shadow flex items-center bg-white w-full z-9999 fixed">
      <div className="tracking-wider text-2xl px-16 py-2 font-sans text-blue-500 font-black">
        QueryX
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
