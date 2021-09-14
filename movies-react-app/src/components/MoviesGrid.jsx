import React, { useEffect, useState } from "react";
import {useQuery} from "../hooks/useQuery";
import MovieCard from "./MovieCard";
import { Pagination } from "./Pagination";
import movies from "./movies.json";
import styles from "./MovieGrid.module.css";
import { Link, useLocation, useParams } from "react-router-dom";
import { get } from "../utils/httpClient";
import { Spinner } from "./Spinner";
export function MoviesGrid() {


  const [movies, setmovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const query = useQuery();//Hook
  const search = query.get("search");

  useEffect(() => {
    setIsLoading(true);
    //Hcemos la búsqueda por nombre, de lo contrario optiene la busqueda completa
    const seachUrl = search
      ? "4/search/movie?api_key=0eab725fc457848fef7b6c40cf8c5731&query=" +
        search
      : "4/list/1?api_key=0eab725fc457848fef7b6c40cf8c5731";

    console.log(seachUrl);
    get(seachUrl).then((data) => {
      setmovies(data.results);
      setIsLoading(false);
    });
  }, [search]);
  if (isLoading) {
    return <Spinner />;
  }
  return (
    <div>
      <ul className={styles.moviesGrid}>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </ul>
    </div>
  );
}
