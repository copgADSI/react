import React, { useEffect, useState } from "react";
import styles from "./SearchImput.module.css";
import { FaSearch } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import { useQuery } from "../hooks/useQuery";
export function SearchMovie() {
  const query = useQuery(); //Hook
  const search = query.get("search");

  const [searchText, setSearchText] = useState("");
  const history = useHistory(); //Añadimos un nuevo elemento a la ruta

  //Este efecto se ejectuta cuando hayan cambio en el search
  useEffect(() => {
    setSearchText(search || "");
  }, [search]);

  const handlerSubmit = (e) => {
    e.preventDefault();
    history.push(`/?search=${searchText}`); //Agregamos el valor del input
  };

  return (
    <form className={styles.searchContainer} onSubmit={handlerSubmit}>
      <div className={styles.searchBox}>
        <input
          type="text"
          className={styles.searchInput}
          value={searchText}
          placeholder="Search Movie"
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button type="submit" className={styles.searchButton}>
          <FaSearch size={20} />
        </button>
      </div>
    </form>
  );
}
