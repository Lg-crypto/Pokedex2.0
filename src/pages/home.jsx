import React from 'react'
import './home.css'
import Pokedex from '../components/Pokedex'


export default function Home() {
  return (
    <div className='homeContainer'>
        <Pokedex></Pokedex>
    </div>
  )
}