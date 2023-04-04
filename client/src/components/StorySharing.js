import React, { useState } from "react";

function StorySharing({picture}) {
    return (
        <div className='card6'>
            <img src={picture} alt="StorySharing" />
            <h2>StorySharing</h2>
            <p>Join the SiderealMind community and share your experience</p>
        </div>
    )
}

export default StorySharing;