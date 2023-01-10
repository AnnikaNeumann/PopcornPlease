import './App.css';
import React from 'react';
import {useState} from 'react';
import axios from 'axios';

// import {BrowserRouter as Router} from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Search from './components/Search';
import Movies from './components/Movies';
import Popup from './components/Popup';

//create useState for movies
function App () {  
  const [state, setState] =useState({
    s: "", //search
    movies: [], //results
    selected: {}
  });

  //create useState for favorites 
  // const [favorite, setFavorite] = useState ([]);

  const apiurl = "http://www.omdbapi.com/?s=&apikey=23c8d5ea";

  //anonymus search function, checks api url based on our searched movie. 
  const search = (e) => {
    
    if (e.key === "Enter"){
    // "&s="" is how we search on an open movie db plus our state query
    
      axios(apiurl + "&s=" + state.s)
      .then(( {data} ) => {
        console.log(data)
      let movie = data.Search;


      setState(prevState =>{
        return{...prevState, movies: movie}
      })
      });
    }
    
  }

  // const addToFavorites = (movies) =>{
  //   setFavorites([...favorites, movies])
  //   console.log("my favorites")
  // }


  const handleInput = (e) =>{
    let s = e.target.value; 

    //setting state of the movies we search for
    setState(prevState =>{
      return {...prevState, s:s}
    });
  }

    console.log(state.s);

    //pop up function gets the data of the movie by checking the api and the movie's id.
    const openPopup = id => {
      axios(apiurl + "&i=" + id)
      .then(({data}) => {
        let movie = data;

        console.log(movie);

        //setting the state of the selected movie
        setState(prevState =>{
          return{...prevState, selected: movie}
        });
      });
    }
  
    
//close pop up function and setting state of previous selected movies (on click brings us back to search page)
    const closePopup = () => {
      setState(prevState => {
        return { ...prevState, selected: {} }
      });
    }


  return (
    <>

    <header><h1>Movie Database</h1></header>

    <div className='App'>
  
    <Navbar/>  
    <main>  
    <Search handleInput={handleInput} search={search}/>
    <Movies movies={state.movies} openPopup={openPopup} />
    
    {/* addToFavorites={addToFavorites}
    <button onClick={() => addToFavorites(movies)}>
                  Add to favorites
                </button> */}
    {(typeof state.selected.Title != "undefined") ? <Popup selected={state.selected} closePopup={closePopup} /> : false}
    </main>
      
    <Footer/>
    </div>
    </>
  );

}

export default App;
