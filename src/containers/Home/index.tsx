import React from "react";
import Header from "./Header";
import SideBar from "./SideBar";
import InfoCard from "./../../components/InfoCard";

const Home: React.FC = () => {

    return (<div >
        <Header /> 
        <div className="flex">
            <SideBar /> 
            <div>
                <div className="w-full h-24 top-0 left-0"/>
                <div className="grid grid-cols-2 gap-4 overflow-y-auto">
                    <InfoCard />
                    <InfoCard /> 
                    <InfoCard /> 
                    <InfoCard />  
                </div>
            </div>
        </div>
        
        
        </div>);
};

export default Home;
