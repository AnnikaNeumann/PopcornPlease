import './components/css/App.css';
import './components/css/Navbar.css'
import React from 'react';
import {useState} from 'react';
import axios from 'axios';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


// import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Favorites from './components/Favorites';
import Layout from './components/Layout';


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
      <div className='App'>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home movies={state.movies} openPopup={openPopup} handleInput={handleInput} search={search} state={state} closePopup={closePopup}/>}></Route>
              <Route path='/favorites' element={<Favorites />}></Route>
              <Route path='/about' element={<About />}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
       </div>
    </>
  );
  }

export default App;
