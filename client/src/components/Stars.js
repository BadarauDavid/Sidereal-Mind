import React, {useState} from "react";
import { useParams } from "react-router-dom";

function Stars () {
    let {picture} = useParams();
    return (
        <div className='card1'>
            <img src={picture} alt="Sky is the limit" />
            <h2>Aim for the stars!</h2>
            <p> Astonishing pictures of the Universe </p>
        </div>
    )
}

export default Stars;