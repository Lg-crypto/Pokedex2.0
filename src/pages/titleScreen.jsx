import React from 'react'
import './titleScreen.css'

export default function TitleScreen({setState}) {
    const audio = new Audio('/titleScreenSound.mp3');
    audio.loop = true;
    const handleClick = () => {
        audio.play();
        setState("home");
    }

  return (
    <div className="titleScreen" onClick={handleClick}>
        <h1>Pokedex</h1>
        <h4 className='flashing'>Click to start</h4>
    </div>
  )
}