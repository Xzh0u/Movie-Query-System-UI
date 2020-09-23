import React from "react";
import Header from "./Header";
import SideBar from "./SideBar";
import InfoCard from "./../../components/InfoCard";
import BackTop from "./../../components/BackTop";
const Home: React.FC = () => {

    return (<div >
        <Header /> 
        <div className="flex">
            <SideBar /> 
            <div>
                <div className="w-full h-24 top-0 left-0"/>
                <div className="flex flex-col ml-76 overflow-y-auto">
                    <InfoCard />
                    <InfoCard /> 
                    <InfoCard /> 
                    <InfoCard /> 
                    <InfoCard />  
                    <InfoCard />
                    <InfoCard /> 
                    <InfoCard /> 
                    <InfoCard /> 
                    <InfoCard />  
                </div>
            </div>
        </div>
        <BackTop />
        
        </div>);
};

export default Home;
