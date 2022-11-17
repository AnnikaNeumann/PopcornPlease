import './App.css';
import React from 'react';
import {useState} from 'react';
// import {BrowserRouter as Router} from 'react-router-dom';

import Homepage from './components/Homepage';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Search from './components/search';


const posts = [
  { id: '1', name: 'No results for Titanic' },
  { id: '2', name: 'Forrest Gump' },
  { id: '3', name: 'The Neverending Story' },
  { id: '4', name: 'Die Hard' },
];

const filterPosts = (posts, query) => {
  if (!query) {
    return posts;
  }

  return posts.filter((post) =>{
    const postName = post.name.toLowerCase();
    return postName.includes(query);
  });

}


function App() {

  // filter list based on search, search bar leads to new url
  const {search} = window.location;
  const query = new URLSearchParams(search).get('s');
  // start filtering as user types
  const [searchQuery, setSearchQuery] = useState(query || '');
  const filteredPosts = filterPosts(posts, searchQuery);

  return (
    <>
    <Navbar/>

    {/* use search query and filter function to render post matching search */}
    <div>
    <Search
      searchQuery={searchQuery}
      setSearchQuery={setSearchQuery}
    />
      
    <ul>{filteredPosts.map(post =>(
      <li key ={post.key}>{post.name}</li>
      ))}
      </ul>
    </div>
    <Homepage/>
    <Footer/>
    </>
  );
}

export default App;
