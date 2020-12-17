import React from 'react';
import {Route, Switch} from "react-router-dom";

import "./App.css"

import Navbar from './components/Navbar';

import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import Error from './pages/Error';






export default function App() {
    return (
        <div>
            <Navbar />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/rooms/:slug" exact component={SingleRoom} />
                <Route path="/rooms" excat component={Rooms} />       
                <Route component={Error} />
            </Switch> 



        </div>
    )
}




// import MovieList from './components/DevEdContextÜbung/MovieList';
// import MovieNav from './components/DevEdContextÜbung/MovieNav';
// import AddMovie from './components/DevEdContextÜbung/AddMovie';
// import {MovieProvider, MovieContext} from './components/DevEdContextÜbung/MovieContext';

            {/* <MovieProvider>
                <div className="App">
                    <MovieNav />
                    <MovieList />
                    <AddMovie />
                </div>
            </MovieProvider> */} 