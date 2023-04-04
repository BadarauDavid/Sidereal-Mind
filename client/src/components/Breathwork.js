import React, { useState } from "react";

function Breathwork ({picture}) {
    return (
        <div className='card4'>
            <img src={picture} alt="Breathwork exercises" />
            <h2>Breathwork exercises</h2>
            <p>Holotropic breathwork, Wim Hof Technique</p>
        </div>
    )
}

export default Breathwork;