import React, { useState } from "react";

function StoryContainer ({name,story}) {
    const [number, setNumber]=useState(20)
    const [show, setShow]=useState(true);
    
    const handleEdit = async()=>{

    }
    
    return (
        <div className="card-story"> 
            <h2>{name}</h2>
            <p>{story.slice(0, number)}</p>
           { show ?(<button className="story-button" onClick={()=>{setNumber(story.length);setShow(!show)}}>Read More</button>):
            
            (<button className="story-button" onClick={()=>{setNumber(20);setShow(!show)}}>Read less</button>)}
            <button onClick={handleEdit} className="story-button">Edit</button>
            <button onClick={handleDelete} className="story-button">Delete</button>
        </div>
    )
}

export default StoryContainer;