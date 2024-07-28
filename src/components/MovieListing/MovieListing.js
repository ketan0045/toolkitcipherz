// 5

import React from "react";
import { useSelector } from "react-redux";
import { getAllmovies,getAllshows} from "../../features/movies/movieSlice";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieListing.scss";

const MovieListing = () => {
  // const allmoviesListing = useSelector(getAllmovies); and pelu bhi try krvu
  const movies = useSelector(getAllmovies);
  // const movies = useSelector((state)=>state.movies.movies); aa bhi kri shakay
  console.log(movies,"state")
  //  console.log(allmoviesListing,"allmoviesListing")
  const  shows= useSelector(getAllshows);
  let renderMovies,renderShows= ""; 

  renderMovies =
    movies.Response === "True" ? (
      movies.Search.map((movie, index) => (
        <MovieCard key={index} data={movie} />
      ))
    ) : (
      <div className="movies-error">
        <h3>{movies.Error}</h3>
      </div>
    );
  console.log(renderMovies, "vvv");

  renderShows =
  shows.Response === "True" ? (
    shows.Search.map((movie, index) => (
      <MovieCard key={index} data={movie} />
    ))
  ) : (
    <div className="shows-error">
      <h3>{shows.Error}</h3>
    </div>
  );
  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>Movies</h2>
        <div className="movie-container">{renderMovies}</div>
      </div>
      <div className="show-list">
        <h2>shows</h2>
        <div className="movie-container">{renderShows}</div>
      </div>  
    </div>
  );
};

export default MovieListing;
