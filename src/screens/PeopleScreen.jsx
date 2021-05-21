import React, { useState, useEffect } from 'react';

const PeopleScreen = () => {

    const baseURL = 'https://swapi.dev/api/'

    const [currentPeople, setCurrentPeople] = useState([])

    const onloadHelper = async () => {
        const response = await fetch(baseURL + 'people/?search=') 
        const data = await response.json() 
        const res = data.results 
        setCurrentPeople(res) 
    }

     // Populates the page with all possible results on load 
    // to provide user with tangible information before they search
    useEffect(() => {
        onloadHelper()
    }, [])
  
    const handleSearch = async() => {
      let temp = document.getElementById("searchbar").value
      const response = await fetch(baseURL + 'people/?search=' + temp) // make api call
      const data = await response.json() // jsonify response
      console.log(data) // check json string for what to extract
      const res = data.results // extract result from responsee
      console.log(res) //checking result
      setCurrentPeople(res)
    }

    return (
        <div>
            <div>
                <input id="searchbar"></input><button onClick={handleSearch}>Search</button>
            </div>
                {currentPeople.map((currentPeople, index) => (  
                    <div key={index} className="card">
                        <div className="card-body">
                            <h5 className="card-title">Name: {currentPeople.name}</h5>
                            <p className="card-text">Birth Year: {currentPeople.birth_year}</p>
                            <p className="card-text">Gender: {currentPeople.gender}</p>
                            <p className="card-text">Height: {currentPeople.height}cm</p>
                            <p className="card-text">Weight: {currentPeople.mass}kg</p>
                        </div>
                    </div>
                ))}
        </div>
    );

}

export default PeopleScreen;