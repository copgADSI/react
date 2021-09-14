import React from "react";
//https://api.themoviedb.org/4/list/1
//https://api.themoviedb.org/3/movie/284053?api_key=0eab725fc457848fef7b6c40cf8c5731
//https://api.themoviedb.org/3/search/movie?api_key=0eab725fc457848fef7b6c40cf8c5731&query=Jack+Reacher
const API = "https://api.themoviedb.org/";
const APIv3 =
  "https://api.themoviedb.org/3/movie/284053?api_key=0eab725fc457848fef7b6c40cf8c5731";

export function get(path) {
  console.log(API+path);
  return fetch(API + path, {
    headers: {
        
      Authorization: "Bearer 0eab725fc457848fef7b6c40cf8c5731",
      "Content-Type": "application/json;charset=utf-8",
    },
  }).then((result) => result.json());

}



