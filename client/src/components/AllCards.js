import React, { useState, useEffect } from "react";
import Stars from './Stars';
import Music from './Music';
import GuidedMeditation from './GuidedMeditation';
import Breathwork from './Breathwork';
import SacredGeometry from './SacredGeometry';
import StorySharing from './StorySharing';
import AboutUs from './AboutUs';


function AllCards () {
const [pictures, setPictures] = useState("");

useEffect(() => {
    async function getNaturePhoto(number) {
        try {
          const response = `https://api.pexels.com/v1/search?query=nature&per_page=${number}`;
          let urlpackage = await fetch(response, {
            headers: {
              Authorization:
              "WcceGN4VytKnt3vifRFxdABX8sgNVlrTYwcVL7axBsPjBvETZJNMnZZ1"
            }
          })
          const data = await urlpackage.json();
          const pictureURLs=data.photos.map(photo => photo.src.original);
          
          setPictures(pictureURLs);
          console.log(pictureURLs);
        }
        catch (error) {
          console.error(error);
      
        }
      }
      getNaturePhoto(7);    
}, [])    

return (
    <div className='card-container'>
        <Stars picture={pictures[0]}/>
        <Music picture={pictures[1]}/>
        <GuidedMeditation picture={pictures[2]}/>
        <Breathwork picture={pictures[3]}/>
        <SacredGeometry picture={pictures[4]}/>
        <StorySharing picture={pictures[5]}/>
        <AboutUs picture={pictures[6]}/>
    </div>
    )
}
export default AllCards;