import React from "react";

function Popup( {selected, closePopup }){
    return(

// Actual pop up function which returns the selected Title, Rating, Poster, Year of release, Plot and starred actors 
// based on the selected movie which gets imdb id from Api. We also add a button here to close the pop up, which 
// brings us back to the search function / landing page


        <section className="popup">
            <div className="content">
                <h2>{selected.Title}<span>({selected.Year})</span></h2>
                <p className="rating">Rating: {selected.imdbRating}</p>
                <div className="plot">
                    <img src={selected.Poster} />
                    <p>{selected.Plot}</p>
                    <p>Starring : {selected.Actors}</p>
                </div>
                <button className="close" onClick={closePopup}>Close</button>
            </div>

        </section>
    )
}

// 
export default Popup;


