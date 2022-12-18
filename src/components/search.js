import React from 'react'

function Search ({handleInput, search}) {
  return (
        <section className='searchbox-wrap'>
        <input 
        type='text' 
        placeholder='Search for your favourite movie' 
        className='searchbox'
        onChange={handleInput}
        onKeyUp={search}
        />
        </section>
  )
}

export default Search;
