/* eslint-disable no-debugger */
import React, { useContext, useEffect } from "react";
import Header from "./Header";
import SideBar from "./SideBar";
import InfoCard from "./../../components/InfoCard";
import BackTop from "./../../components/BackTop";
import {movieContext} from "./../../context/MovieProvider";
import { getAllMovies} from "./../../utils/getAllMovies";
// import { getTypedMovies} from "./../../utils/getTypedMovies";

const Home: React.FC = () => {
    const { movie, dispatch } = useContext(movieContext);

    useEffect(() => {
        getAllMoviesRequest();
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);

    useEffect(() => {
        console.log(movie)
    }, [movie]);
    
    const getAllMoviesRequest = async () => {
        const movies = await getAllMovies();
        console.log(movies)
        console.log("movies")
        dispatch({ type: 'setMovies', payload: {movie: movies} })
    }
    console.log(movie)
    return (
        <div >
            <Header /> 
            <div className="flex">
                <SideBar /> 
                <div>
                    <div className="w-full h-24 top-0 left-0"/>
                    <div id="back-to-top-anchor" className="flex flex-col ml-76 overflow-y-auto">
                        {/* <InfoCard />   */}
                        {movie.map(({country, date, director, introduction,
                        language, link, majors, rank, score, title, type}) => (
                            <InfoCard  information={[country, date, director, introduction,
                                language, link, majors, rank, score, title, type]}/>
                        ))}
                        <BackTop />
                    </div>
                </div>
            </div>
            
            
        </div>);
};

export default Home;
