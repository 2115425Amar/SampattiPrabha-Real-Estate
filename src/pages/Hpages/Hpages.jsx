import React from 'react'
import "./Hpages.scss"
import SearchBar from '../../components/searchBar/SearchBar'

function Hpages() {
  return (
    <div className='Hpages'>
      <div className="textContainer">
        <div className="wrapper">
            <h1>Find Real Estate & Get Your Dream Place</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, consequatur eligendi soluta in assumenda natus dolorum labore officia architecto minima distinctio qui velit animi iusto itaque consectetur! Tempore, dolorem ex.</p>
            <SearchBar/>
            <div className="boxes">
                <div className="box">
                    <h1>16+</h1>
                    <h2>Year of Experience</h2>
                </div>
                <div className="box">
                    <h1>200</h1>
                    <h2>Award Gained</h2>
                </div>
                <div className="box">
                    <h1>1200+</h1>
                    <h2>Property Ready</h2>
                </div>
            </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="bg.png" alt="" />
      </div>
    </div>
  )
}

export default Hpages
