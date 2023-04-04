import './App.css';
import React, { useState, useEffect } from "react";
import BackgroundColorButton from './components/BackgroundColorButton';
import Header from './components/Header';
import AllCards from './components/AllCards';


function App() {
  const [bgColor, setBgColor] = useState("#2DB4B1");

  const handleBgColor = (color) => {
    setBgColor(color);
  };

  return (
    <div className="App" style={{ backgroundColor: bgColor }}>
      <Header />
      <BackgroundColorButton onBgColorChange={handleBgColor} />
      <AllCards />
    </div>

  );
}

export default App;
