import React from "react";

function Movie ({movie, openPopup}){

    
// function takes passed down openPopup prop and movie to open the pop with poster and title
    return(
        <div className="movie" onClick={() => openPopup(movie.imdbID)}>
            <img src={movie.Poster} />
            <h3>{movie.Title}</h3>
        </div>


    )
}

export default Movie;