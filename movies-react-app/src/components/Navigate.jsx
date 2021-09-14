import React from "react";
import { Link } from "react-router-dom";
import styles from './Navigation.module.css';
import {SearchMovie} from "./SearchMovie.jsx"
export function Navigate() {
  return (
    <nav>
      <div className={styles.logo}>
      <Link to="/" className={styles.home}><h2>Movie Awesome </h2></Link>
        
      </div>
      <ul className={styles.navLink}>
        <li>
          <SearchMovie/>
        </li>
        <li>
          <Link to="/Movie">Movies</Link>
        </li>
      </ul>
    </nav>
  );
}
