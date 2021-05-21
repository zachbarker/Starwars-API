import React, { useState, useEffect } from 'react';

const PlanetScreen = () => {

    // the base url for API
    const baseURL = 'https://swapi.dev/api/'
    // Sets and stores the current item returned from API call
    const [currentItem, setCurrentItem] = useState([])  

    // Populates the page with all possible results on load 
    // to provide user with tangible information before they search
    const onloadHelper = async () => {
        const response = await fetch(baseURL + 'planets/?search=') 
        const data = await response.json() 
        const res = data.results 
        setCurrentItem(res) 
    }

    // calls the onLoadHelper function on load
    useEffect(() => {
        onloadHelper()
    }, [])

    // handles making the API call using the search endpoint 
    // for films based on the users input 
    const handleSearch = async() => {
        // gets user input for searching
        let input = document.getElementById("searchbar").value
        console.log(input) // check input
        // handles the API call
        const response = await fetch(baseURL + 'planets/?search=' + input) 
        // JSONify the responsee
        const data = await response.json() 
        console.log(data) // check json string for what to extract
        // Extract result from responsee
        const res = data.results
        console.log(res) //checking result
        // set retrieved item in state
        setCurrentItem(res) 
      }

    return (
        <div>
            <div>
                <input id="searchbar"></input><button onClick={handleSearch}>Search</button>
            </div>
                {currentItem.map((currentItem, index) => (
                    <div key={index} className="card">
                        <div className="card-body">
                            <h5 className="card-title">Planet: {currentItem.name}</h5>
                            <p className="card-text">Population: {currentItem.population}</p>
                            <p className="card-text">Climate: {currentItem.climate}</p>
                            <p className="card-text">Terrain: {currentItem.terrain}</p>
                            <p className="card-text">Length of Year: {currentItem.orbital_period} days</p>
                            <p className="card-text">Length of Day: {currentItem.rotation_period} hours</p>
                            <p className="card-text">Gravity: {currentItem.gravity}</p>
                        </div>
                    </div>
                ))}   
        </div>
    );

}

export default PlanetScreen;