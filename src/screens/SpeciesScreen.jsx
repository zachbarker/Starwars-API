import React, { useState, useEffect } from 'react';

const SpeciesScreen = () => {

    // Populates the page with all possible results on load 
    // to provide user with tangible information before they search
    const onloadHelper = async () => {
        const response = await fetch(baseURL + 'species/?search=') 
        const data = await response.json() 
        const res = data.results 
        setCurrentItem(res) 
    }

    // Calls the onLoadHelper on load
    useEffect(() => {
        onloadHelper()
    }, [])

    // the base url for API
    const baseURL = 'https://swapi.dev/api/'
    // Sets and stores the current item returned from API call
    const [currentItem, setCurrentItem] = useState([])  

    // handles making the API call using the search endpoint 
    // for films based on the users input 
    const handleSearch = async() => {
        // gets user input for searching
        let input = document.getElementById("searchbar").value
        console.log(input) // check input
        // handles the API call
        const response = await fetch(baseURL + 'species/?search=' + input) 
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
                        <h5 className="card-title">Species: {currentItem.name}</h5>
                        <p className="card-text">Home Planet: </p>
                        <p className="card-text">Language: {currentItem.language}</p>
                        <p className="card-text">Designation: {currentItem.designation}</p>
                        <p className="card-text">Classification: {currentItem.classification}</p>
                        <p className="card-text">Avg Lifespan: {currentItem.average_lifespan}</p>
                        <p className="card-text">Avg Height: {currentItem.average_height}</p>
                    </div>
                </div>
            ))}
        </div>
    );

}

export default SpeciesScreen;