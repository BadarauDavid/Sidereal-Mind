import React, { useState, useEffect } from "react";
import SiderealImage from "./sidereal.png";
import BackgroundColorButton from "./BackgroundColorButton";
import { Outlet } from "react-router-dom";



function Header() {
    const [bgColor, setBgColor] = useState("#2DB4B1");

    const handleBgColor = (color) => {
    setBgColor(color);
    };

    return (
        
        <div className="App" style={{ backgroundColor: bgColor }}>
            {/* <a href="http://localhost:3000/homepage" target="_blank" rel="noopener noreferrer">Homepage</a> */}
        <header className="app-header">
            <h1>
                <img src={SiderealImage} />
            </h1>
            <p>
                Soothing Sounds and Visuals for Guided Meditation and Breathwork
            </p>
            <p>
                Welcome! If you are looking for wellbeing, peace of mind, better focus and better sleep, you've come to the right place!
            </p>
        </header>
        <BackgroundColorButton onBgColorChange={handleBgColor} />
        <Outlet/>
        </div>
    )
}

export default Header;