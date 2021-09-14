import React from "react";
import { Link } from "react-router-dom";
import styles from "./MovieCard.module.css";
export default function MovieCard({ movie }) {
  const img_Url = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
  return (
    <li className={styles.movieCard}>
      <Link to={"movies/" + movie.id}>
        <img
          src={img_Url}
          width={230}
          height={345}
          className={styles.movieImage}
          alt={movie.title}
        />
        <div>
          <label htmlFor="">{movie.title}</label>
        </div>
      </Link>
    </li>
  );
}
