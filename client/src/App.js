import './App.css';
import React, { useState, useEffect } from "react";
import BackgroundColorButton from './components/BackgroundColorButton';
import Header from './components/Header';


function App() {
  const [bgColor, setBgColor] = useState("#9e9e9e");

  const handleBgColor = (color) => {
    setBgColor(color);
  };

  return (
    <div className="App" style={{ backgroundColor: bgColor }}>
      <Header />
      <BackgroundColorButton onBgColorChange={handleBgColor} />
    </div>

  );
}

export default App;
