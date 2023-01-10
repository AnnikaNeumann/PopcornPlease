import React from "react";
import Movie from "./Movie";

function Movies ({ movies, openPopup }) {

    return(

        <section className="movies">
            {movies && movies.map(movie => (
                <Movie key={movie.imdbID} movie={movie} openPopup={openPopup}/>
                ))};
                {/* <button onClick={() => addToFavorites(movies)}>Add to Favorites</button>  */}

        </section>

    )
}
 
// function maps through movies result and generate a pop up for the required imdb id
    


export default Movies;