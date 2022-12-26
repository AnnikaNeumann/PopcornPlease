import React from "react";
import Movie from "./Movie";

function Movies ({ movies, openPopup }) {

    
    return(

        <section className="movies">
            {movies.map(movie => (
                <Movie key={movie.imdbID} movie={movie} openPopup={openPopup}/>
                ))};

        </section>

    )
}

    


export default Movies;