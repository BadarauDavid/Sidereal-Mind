import React, { useState } from "react";

function BackgroundColorButton(props) {
    const { onBgColorChange } = props;
    const [bgColor, setBgColor] = useState("#9e9e9e");

    return (
        <button className="background">
            Choose background color
            <input
                type="color"
                placeholder="Choose background color"
                value={bgColor}
                onChange={(e) => onBgColorChange(e.target.value)}
            />
        </button>
    );
}

export default BackgroundColorButton;