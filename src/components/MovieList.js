import React, { useState, useEffect } from 'react'
import Card from './Card'
import { useParams } from "react-router-dom"

const MovieList = () => {
  const [movieList, setMovieList] = useState([])
  const { type } = useParams()

  useEffect(() => {
    getData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type])


  const getData = async () => {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
      const resp = await response.json();
      setMovieList(resp.results);
    } catch (error) {
      console.log("error", error)
    }
  }



  return (
    <div className="movie__list ">
      <div className="list__title">{(type ? type : "popular").toUpperCase()}</div>
      <div className="list__cards ">
        {
          movieList.map((movie ,index) => {
            return (<Card movie={movie} key={index}/>)
          })
        }
      </div>
    </div>
  )
}

export default MovieList
