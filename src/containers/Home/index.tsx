/* eslint-disable no-debugger */
import React, { useContext, useEffect } from "react";
import Header from "./Header";
import SideBar from "./SideBar";
import InfoCard from "./../../components/InfoCard";
import BackTop from "./../../components/BackTop";
import {movieContext} from "./../../context/MovieProvider";
import { getAllMovies} from "./../../utils/getAllMovies";
import { getMovieImages} from "./../../utils/getMovieImages";

const Home: React.FC = () => {
    const { movie, dispatch } = useContext(movieContext);

    useEffect(() => {
        getAllMoviesRequest();
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);

    
    const getAllMoviesRequest = async () => {
        const movies = await getAllMovies();
        const imgs = await getMovieImages();

        dispatch({ type: 'setMovies', payload: {movie: movies} })
        dispatch({ type: 'setImages', payload: {imgs: imgs} })
    }
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
                        language, link, majors, rank, score, title, type,image_url}) => ( 
                            <InfoCard  information={[country, date, director, introduction,
                                language, link, majors, rank, score, title, type,image_url]} />
                        ))}
                        <BackTop />
                    </div>
                </div>
            </div>
            
            
        </div>);
};

export default Home;
