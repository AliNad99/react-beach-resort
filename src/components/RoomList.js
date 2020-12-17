import React from "react";
import Room from "./Room";

export default function RoomList({sortedRooms}) {

    if(sortedRooms.length === 0){
        return(
            <div className="empty-search">
                <h3>unfortunately no rooms matched your search parameter</h3>
            </div>
        )
    }
    return(
        <div>
            <section className="roomslist">
                <div className="roomslist-center">
                    {sortedRooms.map( item => {
                        return (<Room key={item.id} room={item}></Room>)
                    })}
                </div>
            </section>
        </div>
    )
}


// import React from 'react'
// import {RoomConsumer, RoomProvider, RoomContext} from "../context"
// import Rooms from '../pages/Rooms';
// import Loading from "./Loading"
// import Room from './Room';
// import Title from './Title';


// export default function RoomList({sortedRooms}){

//     if(sortedRooms.length === 0){
//         return (
//             <div className="empty-searc">
//                 <h3>unfortunately no rooms matched your search parameter</h3>
//             </div>
//         )
//     }

//     return (
//         <section className="roomslist">
//             <div className="roomslist-center">
//                 {
//                     sortedRooms.map(item => {
//                         return <Room key={item.id} room={item} />
//                     })
//                 }
//             </div>
//         </section>
//     )

// }
