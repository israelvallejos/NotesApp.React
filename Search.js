import React from 'react'
import { MdSearch } from 'react-icons/md'
const Search = ({handleInputSearch}) => {
  return (
    <div className='search-bar'>
      <MdSearch className='search-icons' size='1.3em' />
      <input type='text' 
      onChange={(event) => handleInputSearch(event.target.value)}
      placeholder='type here to search...'/>
    </div>
  )
}

export default Search