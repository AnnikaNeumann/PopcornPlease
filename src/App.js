import './App.css';
import React from 'react';
import {useState} from 'react';
import axios from 'axios';

// import {BrowserRouter as Router} from 'react-router-dom';
import Homepage from './components/Homepage';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Search from './components/Search';
import Movies from './components/Movies';


function App () {  
  const [state, setState] =useState({
    s: "",
    movies: [],
    selected: {}
  });

  const apiurl = "https://www.omdbapi.com/?i=tt3896198&apikey=23c8d5ea";


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

    console.log(state.s);

  }

  return (
    <>
    <header><h1>Movie Database</h1></header>

    <div className='App'>
  
    <Navbar/>  
    <main>  
    <Search handleInput={handleInput} search={search}/>
    <Movies movies={state.movies}/>
    </main>
    <Homepage/>
  

    <Footer/>
    </div>
    </>
  );
}

export default App;
