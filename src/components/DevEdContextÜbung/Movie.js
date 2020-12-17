import React from 'react'

function Movie({name, price}) {

    return (
        <div>
            <h4>{name}</h4>
            <h5>{price}</h5>
        </div>
    )
}

export default Movie
