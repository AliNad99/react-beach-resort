import React, {useState, useContext} from 'react'
import { MovieContext } from './MovieContext'

function MovieNav() {

    const [movies, setMovies] = useContext(MovieContext)

    return (
        <div>
            <h4>Peter Parker</h4>
            <h5>List of Movies: {movies.length}</h5>

        </div>
    )
}

export default MovieNav
