import React, { useState, useEffect } from "react";
import StoryContainer from "./StoryContainer";
function StorySharing() {
    const [name,setName] = useState("");
    const [story, setStory]= useState("")
    const [experience, setExperience]= useState([]);
    // let story = [
    //     {name:"marcel", story:"am fost la tara am venit am mancat am plecat"},
    //     {name:"ionel", story:"am fost la oras am venit am mancat am mai stat"}
    // ]


    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = { name, story };
        try {
            const response = await fetch("http://localhost:3001/api/story-sharing", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data)
            });
            const responseData = await response.json();
            console.log(responseData);
        } catch (err) {
            console.log(err);
        }
    };

    async function read(){
        try {
          const response = await fetch("http://localhost:3001/api/story-sharing");
          const data = await response.json();
          setExperience(data)
      }
      
      catch (error) {
          console.error(error);
      } 
      }
    read();


  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="form">
        <label>Your name/ Alias:</label>
        <input
         type="text" 
         onChange={(e)=>setName(e.target.value)}
         />
        <label>Your story:</label>
        <input
         type="text"
         onChange={(e)=>setStory(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      <div className="story-container">
        {experience.map((s,i) =>(
            <StoryContainer 
            name={s.name}
            story={s.story}
            key={i}
            />
        ))}
      </div>
    </div>
  );
}

export default StorySharing;
