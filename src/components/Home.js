import React from "react";
import Search from './Search';
import Movies from './Movies';
import Popup from './Popup';
import Footer from './Footer';


function Home ({handleInput,search,state,openPopup,closePopup }){
    
    return(
        <>
        <header><h1>Movie Database</h1></header>
            
        <main>
    
        <Search handleInput={handleInput} search={search}/>
        <Movies movies={state.movies} openPopup={openPopup} />
        
        {(typeof state.selected.Title != "undefined") ? <Popup selected={state.selected} closePopup={closePopup} /> : false}
        </main>
        </>
   
        )
    }
    
export default Home;
