import React from 'react'
import {useContext} from "react";
import {RoomContext} from "../context"
import Title from "../components/Title"


// get all unique values
const getUnique = (items, value) => {
    return [...new Set(items.map( item => item[value]))]
}

export default function RoomFilter({rooms}) {

    const context = useContext(RoomContext);
    const {handleChange, type, capacity, price, minPrice, maxPrice, minSize, maxSize, breakfast, pets} = context;

    // get unique types
    let types = getUnique (rooms, "type")
    types = ["all", ...types]
    types = types.map((item, index) => {return <option value={item} key={index}>{item}</option>})

    //get unique capcities
    let capacities = getUnique(rooms, "capacity")
    capacities = capacities.map((capacity, index) => { return <option value={capacity} key={index}>{capacity}</option>})

    return(
        <section className="filter-container">
            <Title title="search rooms" />
            <form className="filter-form">
                {/*select type */}
                <div className="form-group">
                    <label htmlFor="type">room type</label>
                    <select 
                        name="type" 
                        id="type" 
                        value={type} 
                        className="form-control" 
                        onChange={handleChange}>
                        {/* options: */}
                        {types}
                    </select>
                </div>
                {/*select guests */}
                <div className="form-group">
                    <label htmlFor="capacity">guests</label>
                    <select 
                        name="capacity" 
                        id="capacity" 
                        value={capacity} 
                        className="form-control" 
                        onChange={handleChange}>
                        {/* options: */}
                        {capacities}
                    </select>
                </div>
                {/*room price */}
                <div className="form-group">
                    <label htmlFor="price">room price ${price}</label>
                    <input type="range" name="price" min={minPrice} max={maxPrice} id="price" value={price} onChange={handleChange} className="form-control"/>
                </div>
                {/*room size */}
                <div className="form-group">
                    <label htmlFor="size">room size</label>
                    <div className="size-inputs">
                        <input type="number" name="minSize" id="minSize" value={minSize} onChange={handleChange} className="size-input"/>
                        <input type="number" name="maxSize" id="maxSize" value={maxSize} onChange={handleChange} className="size-input"/>
                    </div>
                </div>
                {/*extras */}
                <div className="form-group">
                    <div className="single-extra">
                        <input type="checkbox" name="breakfast" id="breakfast" checked={breakfast} onChange={handleChange}/>
                        <label htmlFor="breakfast">breakfast</label>
                    </div>
                    <div className="single-extra">
                        <input type="checkbox" name="pets" id="pets" checked={pets} onChange={handleChange}/>
                        <label htmlFor="pets">pets</label>
                    </div>
                </div>
            </form>
        </section>
    )
}
