import React from 'react'

function Search ({handleInput, search}) {

  //search function responsible for movie search and handleInput
  return (
        <section className='searchbox-wrap'>
        <input 
        type='text' 
        placeholder='Type to search for a movie' 
        className='searchbox'
        onChange={handleInput}
        onKeyUp={search}
        />
        </section>
  )
}

export default Search;
