import React from 'react'
// import "./Header.css"
import {Link, NavLink  } from 'react-router-dom'


const Header = () => {
    return (
        <div className="header">
            <div className="headerLeft">
                <Link  to="/"><img className="atmish" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png" alt="" /></Link>
                <NavLink to="/movies/popular"><span> Popular</span></NavLink>
                <NavLink   to="/movies/top_rated"> <span>Top Rated</span> </NavLink>
                <NavLink   to="/movies/upcoming"> <span>upcoming</span> </NavLink>

            </div>
        </div>
    )
}

export default Header
