import React, { useState, useEffect } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom'
import MovieList from './MovieList'


const Home = () => {

    const [popularMovie, setPopularMovie] = useState([])

    const popApi = async () => {
        try {
            const response = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US');
            const resp = await response.json();
            setPopularMovie(resp.results);
        } catch (error) {
            console.log("error", error)
        }
    }

    useEffect(() => {
        popApi()
    }, [])


    return (
        <>
        <div className="poster">
            <Carousel
            showThumbs={false}
            autoPlay={true}
            transitionTime={3}
            infiniteLoop={true}
            showStatus={false}
            >

                {
                    popularMovie.map((movie ,index)=>{
                        return (
                         <Link style={{textDecoration :"none", color: "white"}} to={`movie/${movie.id}`}  key={index}>
                            <div className="posterImage">
                                <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path
                                }`} alt="" />
                            </div>
                            <div className="posterImage__overlay ">
                                <div className="posterImage__title ">{movie ? movie.original_title : ""}</div>
                                <div className="posterImage__runtime">
                                    {movie ? movie.release_date : ""}
                                    <span className="posterImage__rating ">
                                        {movie ? movie.vote_average: ""}
                                        <i className="fas fa-star" />{" "}
                                    </span>
                                </div>
                                <div className="posterImage__description ">
                                    {movie ? movie.overview :''}
                                </div>
                            </div>
                         </Link>
                        )
                       
                    })
                }
            </Carousel>

            <MovieList/>
        </div>
        </>
    )
}

export default Home
