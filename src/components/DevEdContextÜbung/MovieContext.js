import React, {useState, createContext} from 'react';
import MovieList from './MovieList';

export const MovieContext = createContext();

export function MovieProvider(props) {
        
    const [movies, setMovies] = useState ([
        {
            name: "Harald Potter",
            price: "$10",
            id: 23124,
        },
        {
            name: "Spiel der Tröne",
            price: "$20",
            id: 2455124
        },
        {
            name: "Inception",
            price: "$10",
            id: 24242
        }
    ])

    return (
        <div>
            <MovieContext.Provider value={[movies, setMovies]}>
                {props.children}
            </MovieContext.Provider>
        </div>
    )
}

