import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Spinner } from "../components/Spinner";
import { useQuery } from "../hooks/useQuery";
import { get } from "../utils/httpClient";
import movie from "./movie.json";
import styles from "./MovieDetailss.module.css";
export function MovieDetails() {
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setmovie] = useState(null);


  
  useEffect(() => {
    setIsLoading(true);

    get(
      "3/movie/" + movieId + "?api_key=0eab725fc457848fef7b6c40cf8c5731"
    ).then((data) => {
      console.log(data);
      setmovie(data);
      setIsLoading(false); //Cuando termine de cargar la pelicula queda en false
    });
  }, [movieId]);
  if (isLoading ) {
    //Si está en proceso  de cargar, mostrar msg
    return <Spinner/>;
  }

  const img_Url = "https://image.tmdb.org/t/p/w500" + movie.poster_path;
  return (
    <div className={styles.detailsContainer}>
      <img
        className={`${styles.col} ${styles.movieImage} `}
        src={img_Url}
        alt={movie.title}
      />
      <div className={`${styles.col} ${styles.MovieDetails} `}>
        <p className={styles.firstP}>
          <strong>Title:</strong> {movie.title}
        </p>
        <p>
          <strong>Genres:</strong>{" "}
          {movie.genres.map((genres) => genres.name + ", ")}
        </p>
        <p>
          <strong>Description:</strong> {movie.overview}
        </p>
      </div>
    </div>
  );
}
