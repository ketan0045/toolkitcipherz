import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import MovieApi from "../../common/apis/MovieApi";
// import { APIkey } from "../../common/apis/MovieApiKey";
// import { addmovies } from "../../features/movies/movieSlice";
import { fetchAsyncMovies,fetchAsyncShows } from "../../features/movies/movieSlice";
import MovieListing from "../MovieListing/MovieListing";


const Home = () => { 
  // const movieText = "harry";
  
  const dispatch = useDispatch();

  useEffect(() => {

    // const fetchMovies = async () => {
    //   remove this from here to 
    //   const response = await MovieApi.get(
    //     `?apikey=${APIkey}&s=${movieText}&type=movie`
    //   ).catch((err) => {
    //     console.log("Err", err);
    //   });
    //   // console.log("Home api response", response);
    //   dispatch(addmovies(response.data));
    //   here to here because async action     
    // };

    dispatch(fetchAsyncMovies())
    dispatch(fetchAsyncShows())
  }, [dispatch]);

  return (
    <div>
      <div className="banner-img">
        <MovieListing />
      </div>
    </div>
  );
};

export default Home;
