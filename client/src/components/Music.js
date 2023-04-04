import React, { useState } from "react";

function Music ({picture}) {
    return (
        <div className='card2'>
            <img src={picture} alt="Music" />
            <h2>Music</h2>
            <p>Music for programming, stay focused, sleep, and relaxation</p>
        </div>
    )
}

export default Music;