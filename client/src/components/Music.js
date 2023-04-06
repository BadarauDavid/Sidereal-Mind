import React, { useEffect, useState } from "react";

function Music () {

        const API_KEY = "79064c9ee5msh3a853c614f52775p1a84bejsn4e93f7c3af40";
        const API_URL = "https://deezerdevs-deezer.p.rapidapi.com/search?q=eminem";
      
        async function fetchData() {
          try {
            const response = await fetch(API_URL, {
              headers: {
                "X-RapidAPI-Key": API_KEY,
                "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
              },
            });
            const music = await response.json();
            console.log(music);
          } catch (err) {
            console.error(err);
          }
        }
    
    useEffect(() => {
        fetchData();
    }, []);
    

    return (
        <div >
            <p>Music for programming, stay focused, sleep, and relaxation</p>
        </div>
    )
}

export default Music;