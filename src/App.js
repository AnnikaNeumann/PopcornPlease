import './App.css';
import React from 'react';
import Homepage from './components/Homepage';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Search from './components/search';

function App() {
  return (
    <>
    <Navbar/>
    <Search/>
    <Homepage/>
    <Footer/>
    </>
  );
}

export default App;
