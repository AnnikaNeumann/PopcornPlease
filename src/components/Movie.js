import React from "react";

function Movie ({movie, openPopup}){

    

    return(
        <div className="movie" onClick={() => openPopup(movie.imdbID)}>
            <img src={movie.Poster} />
            <h3>{movie.Title}</h3>
        </div>


    )
}

export default Movie;