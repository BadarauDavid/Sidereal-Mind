import React, { useState } from "react";

function GuidedMeditation ({picture}) {
    return (
        <div className='card3'>
            <img src={picture} alt="Guided meditation" />
            <h2>Guided meditation</h2>
            <p> Try immersive guided meditation </p>
        </div>
    )
}

export default GuidedMeditation;