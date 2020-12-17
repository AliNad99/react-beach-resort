import React, { Component } from 'react'
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from "react-icons/fa"
import Title from "./Title"

export default class Services extends Component {
    constructor(){
        super();
        this.state = {
            services: [{
                icon: <FaCocktail/>,
                title:"free cocktails",
                info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita, voluptatem!"
            },
            {
                icon: <FaHiking/>,
                title:"endless hiking",
                info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita, voluptatem!"
            },
            {
                icon: <FaShuttleVan/>,
                title:"free shuttle van",
                info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita, voluptatem!"
            },{
                icon: <FaBeer/>,
                title:"free beer",
                info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita, voluptatem!"
            }]
        }
    }
    


    render() {
        return (
            <section className="services">
                <Title title="services" />
                <div className="services-center">
                    {this.state.services.map( (item, index) => {
                        return (
                            <article key={index} className="service">
                                <span>{item.icon}</span>
                                <h6>{item.title}</h6>
                                <p>{item.info}</p>
                            </article>
                        )
                    })}
                </div>
               
            </section>
        )
    }
}
