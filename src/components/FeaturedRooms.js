import React, { Component } from 'react'
import {RoomProvider, RoomConsumer, RoomContext } from '../context'
import Loading from './Loading';
import Room from './Room';
import Title from './Title';


export default class FeaturedRooms extends Component {

    static contextType = RoomContext;

    render() {

        const {featuredRooms, loading} = this.context 
        
        let rooms = featuredRooms.map( featuredRoom => {
            return <Room key={featuredRoom.id} room={featuredRoom} /> 
        })


        return (

            <section className="featured-rooms">
                <Title title="featured rooms" />
                <div className="featured-rooms-center">
                    {loading ? <Loading /> : rooms}
                </div>
                
            </section> 
        )
    }
}
