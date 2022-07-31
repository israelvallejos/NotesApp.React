import React from 'react'

const Header = ({handleToggleDarkMode}) => {
    const titleMode = handleToggleDarkMode ? 'darkMode': 'White';
  return (
    <div className='header'>
        <h1>Notes</h1>
      <button className='toggle-button' 
      onClick={() => handleToggleDarkMode((prevState) => !prevState)}>{titleMode}</button>  
    </div>
  )
}

export default Header