import React from "react";


function Movie ({movie, openPopup}){

    
// function takes passed down openPopup prop and movie to open the pop with poster and title
    return(
        <div className="movie" onClick= {() => openPopup(movie.imdbID)}>
                    <h3>{movie.Title}</h3>
                    <img src={movie.Poster} />
        </div>
 /* addToFavorites={addToFavorites}
    <button onClick={() => addToFavorites(movies)}>
                  Add to favorites
                </button> */

    )
}

export default Movie;