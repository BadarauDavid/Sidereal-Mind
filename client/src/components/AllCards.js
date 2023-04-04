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
          setPictures(data.photos[0].src.original);
          console.log(data.photos[0].src.original);
        }
        catch (error) {
          console.error(error);
      
        }
      }
      
    for(let i=0; i<7; i++){
        getNaturePhoto();
    }
}, [])    

return (
    <div className='card-container'>
        <Stars picture={pictures}/>
        <Music picture={pictures}/>
        <GuidedMeditation picture={pictures}/>
        <Breathwork picture={pictures}/>
        <SacredGeometry picture={pictures}/>
        <StorySharing picture={pictures}/>
        <AboutUs picture={pictures}/>
    </div>
    )
}
export default AllCards;