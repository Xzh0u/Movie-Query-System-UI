import React, { useState } from "react";
import Header from "./Header";
import SideBar from "./SideBar";
import InfoCard from "./../../components/InfoCard";
import BackTop from "./../../components/BackTop";
// import { getAllMovies} from "./../../utils/getAllMovies";
// import { getSortedMovies} from "./../../utils/getSortedMovies";
// import { getTagedMovies} from "./../../utils/getTagedMovies";
// import { getTypedMovies} from "./../../utils/getTypedMovies";

const Home: React.FC = () => {

    return (
        <div >
            <Header /> 
            <div className="flex">
                <SideBar /> 
                <div>
                    <div className="w-full h-24 top-0 left-0"/>
                    <div id="back-to-top-anchor" className="flex flex-col ml-76 overflow-y-auto">
                        <InfoCard />  
                        {snapshots.map(({ url, time }, idx) => (
                            <InfoCard url={url} time={time} key={idx} />
                        ))}
                        <BackTop />
                    </div>
                </div>
            </div>
            
            
        </div>);
};

export default Home;
