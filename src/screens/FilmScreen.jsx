import React, { useState, useEffect } from 'react';

const FilmScreen = () => {

    // the base url for API
    const baseURL = 'https://swapi.dev/api/'
    // Sets and stores the current item returned from API call
    const [currentFilm, setCurrentFilm] = useState([])  
    const [characterList, setCharacterList] = useState([])

    // Populates the page with all possible results on load 
    // to provide user with tangible information before they search
    const onloadHelper = async () => {
        const response = await fetch(baseURL + 'films/?search=') 
        const data = await response.json() 
        const res = data.results 
        setCurrentFilm(res) 
    }

    // calls the onLoadHelper on load
    useEffect(() => {
        onloadHelper()
    }, [])

    // handles making API call for each character for the films
    //  with the given character endpoints to populate an array of the associated characters
    // and store in state as characterList
    const getCharacters =  async (endpoints) => {
        const reqs = endpoints.map((endpoints) => fetch(endpoints).then((arg) => arg.json()))
        const data = await Promise.all(reqs)
        console.log(data)
        setCharacterList(data)
    }

    // handles making the API call using the search endpoint 
    // for films based on the users input 
    const handleSearch = async() => {
        // gets user input for searching
        let input = document.getElementById("searchbar").value
        console.log(input) // check input
        // handles the API call
        const response = await fetch(baseURL + 'films/?search=' + input) 
        // JSONify the responsee
        const data = await response.json() 
        console.log(data) // check json string for what to extract
        // Extract result from responsee
        const res = data.results
        console.log(res) //checking result
        // set retrieved item in state
        setCurrentFilm(res) 
        getCharacters(currentFilm[0].characters)
    }


    // simple function to handle showing intro text
    const showIntro = () => {
        document.getElementById('intro').style.display = 'block'
        document.getElementById('show').style.display = 'none'
    }

    // simple function to handle hiding intro text
    const hideIntro = () => {
        document.getElementById('intro').style.display = 'none'
        document.getElementById('show').style.display = 'block'
    }

    // handles showing characters for the films
    const showChars = () => {
        document.getElementById('characters').style.display = 'block'
        document.getElementById('showcharacters').style.display = 'none'
    }

    // handles hiding characters for the films
    const hideChars = () => {
        document.getElementById('characters').style.display = 'none'
        document.getElementById('showcharacters').style.display = 'block'
    }

    return (
        <div>
            <div>
                <input id="searchbar"></input><button onClick={handleSearch}>Search</button>
            </div>
            {currentFilm.map((currentFilm, index) => ( 
                <div key={index} className="card">
                    <div className="card-body">
                        <h5 className="card-title">Star Wars: {currentFilm.title} - Episode 4</h5>
                        <p className="card-text">Release Date: {currentFilm.release_date}</p>
                        <p className="card-text">Directed By: {currentFilm.director}</p>
                        <p className="card-text">Produced By: {currentFilm.producer}</p>
                        <p id="show" onClick={showIntro}>Show Intro Text</p>
                        <div className="card-text" id="intro" style={{display: 'none'}}>
                            <p onClick={hideIntro}>Hide Intro Text</p>
                            <p>{currentFilm.opening_crawl}</p>
                        </div>

                        <p id="showcharacters" onClick={showChars}><b>Show Characters</b></p>
                        <div className="card-text" id="characters" style={{display: 'none'}}>
                            <p><b><u>Characters:</u></b></p>
                            {characterList.map((character, index) => (
                                <p>{character.name}</p>
                            ))}
                            <p onClick={hideChars}><b>Hide Characters</b></p>
                        </div> 
                    </div>
                </div>
            ))}
        </div>
    );

}

export default FilmScreen;