import './App.css';
import React, { useState, useEffect } from "react";
import BackgroundColorButton from './components/BackgroundColorButton';
import Header from './components/Header';
import Card1 from './components/Card1';
import Card2 from './components/Card2';
import Card3 from './components/Card3';
import Card4 from './components/Card4';
import Card5 from './components/Card5';
import Card6 from './components/Card6';
import Card7 from './components/Card7';


function App() {
  const [bgColor, setBgColor] = useState("#2DB4B1");

  const handleBgColor = (color) => {
    setBgColor(color);
  };

  return (
    <div className="App" style={{ backgroundColor: bgColor }}>
      <Header />
      <BackgroundColorButton onBgColorChange={handleBgColor} />
      <div className='card-container'>
        <Card1 />
        <Card2 />
        <Card3 />
        <Card4 />
        <Card5 />
        <Card6 />
        <Card7 />
      </div>
    </div>

  );
}

export default App;
