import React from "react";
import SiderealImage from "./sidereal.png";


function Header() {
    return (
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
    )
}

export default Header;