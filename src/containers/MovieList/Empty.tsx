import React from "react";
import CatIcon from "../../assets/scared_cat.svg";

const Empty: React.FC = () => {
  return (
    <div className="relative w-full h-full">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col space-y-2 items-center">
        <img src={CatIcon} alt="cat" />
        <span className="text-gray-500">没有找到符合条件的记录</span>
      </div>
    </div>
  );
};

export default Empty;
