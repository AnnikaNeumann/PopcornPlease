import './App.css';
import React from 'react';
import {useState} from 'react';
import axios from 'axios';

// import {BrowserRouter as Router} from 'react-router-dom';
// import Homepage from './components/Homepage';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Search from './components/Search';
import Movies from './components/Movies';
import Popup from './components/Popup';

function App () {  
  const [state, setState] =useState({
    s: "",
    movies: [],
    selected: {}
  });

  const apiurl = "http://www.omdbapi.com/?apikey=23c8d5ea";

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



  const handleInput = (e) =>{
    let s = e.target.value; 

    setState(prevState =>{
      return {...prevState, s:s}
    });
  }

    // console.log(state.s);

    const openPopup = id =>{
      axios(apiurl + "&id=" + id)
      .then(({data}) => {
        let movie = data;

        setState(prevState =>{
          return{...prevState, selected: movie}
        });
      });
    }
  

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

    {(typeof state.selected.Title != "undefined") ? <Popup selected={state.selected} closePopup={closePopup} /> : false}
    </main>
    {/* <Homepage/> */}
  

    <Footer/>
    </div>
    </>
  );

}

export default App;
