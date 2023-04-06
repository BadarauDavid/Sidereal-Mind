import React, { useEffect, useState } from "react";

function Music () {

        const API_KEY = "79064c9ee5msh3a853c614f52775p1a84bejsn4e93f7c3af40";
        const API_URL = "https://deezerdevs-deezer.p.rapidapi.com/search?q=ambiental";
      
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
        <p>Music for programming, stay focused, sleep, relaxation</p>
        <br></br>
        <br></br>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/0diEVDtCI9o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <br></br>
        <br></br>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/WL9EOfzoSsA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <br></br>
        <br></br>
        </div>
    )
}

export default Music;