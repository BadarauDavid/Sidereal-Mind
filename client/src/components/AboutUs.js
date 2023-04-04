import React, { useState } from "react";

function AboutUs({picture}) {
    return (
        <div className='card7'>
            <img src={picture} alt="About SiderealMind" />
            <h2>About SiderealMind</h2>
            <p>Learn more about us</p>
        </div>
    )
}

export default AboutUs;