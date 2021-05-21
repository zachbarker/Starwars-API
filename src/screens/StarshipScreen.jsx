import React, { useState, useEffect } from 'react';

const StarshipScreen = () => {

    // the base url for API
    const baseURL = 'https://swapi.dev/api/'
    // Sets and stores the current item returned from API call
    const [currentItem, setCurrentItem] = useState([])  


    // Populates the page with all possible results on load 
    // to provide user with tangible information before they search
    const onloadHelper = async () => {
        const response = await fetch(baseURL + 'starships/?search=') 
        const data = await response.json() 
        const res = data.results 
        setCurrentItem(res) 
    }

    // Calls the onLoadHelper on load
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
        const response = await fetch(baseURL + 'starships/?search=' + input) 
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
                            <h5 className="card-title">Starship: {currentItem.name}</h5>
                            <p className="card-text">Model: {currentItem.model}</p>
                            <p className="card-text">Class: {currentItem.starship_class}</p>
                            <p className="card-text">Manufacturer: {currentItem.manufacturer}</p>
                            <p className="card-text">Crew: {currentItem.crew}</p>
                            <p className="card-text">Passengers: {currentItem.passengers}</p>
                            <p className="card-text">Hyperdrive Rating: {currentItem.hyperdrive_rating}</p>
                        </div>
                    </div>
                ))}   
        </div>
    );

}

export default StarshipScreen;