import React, {useState} from 'react'
import {FaAlignRight} from "react-icons/fa"
import {Link} from "react-router-dom"

const logo = "/logo.svg"

export default function Navbar() {
    
    const [state, changeState] = useState(false)

    function handleToggle(){ 
        changeState( prevState => !prevState )
    }

    return (
        <nav className="navbar" >
            <div className="nav-center">
                <div className="nav-header">
                    <Link to="/">
                        <img src={logo} alt="Beach Resort"/>
                    </Link>
                    <button type="button" className="nav-btn" onClick={handleToggle}>
                        <FaAlignRight className="nav-icon"/>
                    </button>
                </div>
                <ul className={state ? "nav-links show-nav" : "nav-links" }>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/rooms">Rooms</Link></li>
                </ul>
            </div> 
        </nav>
    )
}

