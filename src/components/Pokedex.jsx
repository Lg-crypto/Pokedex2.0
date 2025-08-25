import React from 'react';
import './Pokedex.css';


export default function Pokedex() {
    
    const [pokemon, setPokemon] = React.useState(null);
    const [sprite, setSprite] = React.useState();
    const [search, setSearch] = React.useState('1');
    const [name, setName] = React.useState('pikachu');
    const [id, setId] = React.useState(25);
    const [types, setTypes] = React.useState(["electric"]);


    const fetchPokemon = async (pokemon) => {
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
            const data = await response.json();
            setPokemon(data);
            if (data.sprites['versions']['generation-v']['black-white'].animated.front_default) {
                setSprite(data.sprites['versions']['generation-v']['black-white'].animated.front_default);    
            } else {
                setSprite(data.sprites.front_default);
            }
            setTypes(data.types.map(typeInfo => typeInfo.type.name));
            setName(data.name);
            setId(data.id);
        } catch (e){
            console.log("Pokemon not found" + e);
        }
    }

    const handleChange = (e)=>{
        setSearch(e.target.value.toLowerCase());
        console.log(search);
    
    }

    const nextPokemon = () => {
        let next = id + 1;
        if (next > 1025) {
            next = 1;
        }
        fetchPokemon(next);
        setSearch(next);
    }

    const prevPokemon = () => {
        let prev = id - 1;
        if (prev > 1010) {
            prev = 1;
        }
        fetchPokemon(prev);
        setSearch(prev);
    }

    const keyDown = (e) => {
        if (e.key === 'Enter'){
            fetchPokemon(search);
            
        }
    }






    React.useEffect(() => {
        fetchPokemon(search);
        console.log(types);
    },[]);


  return (
    <div className="pokedexContainer">
        <div className="content">
            <div className="schreen">
                <img className='img' src={sprite} alt="imagem de um pokemon" />
                {
                    types.map((element, index) => {
                        return <div className={`type type${index} ${element}`}>{element}</div> 
                    })
                }
                <h2 className='name'>{id} - {name}</h2>
            </div>
            <input 
                type="text" 
                className='input'
                placeholder='Type a name or number...'
                onChange={handleChange}
                onKeyDown={keyDown}
            />
            <button 
                className='btn prev'
                onClick={prevPokemon}
            >{"<"}Prev</button>
            <button 
                className='btn next'
                onClick={nextPokemon}    
            >Next{">"}</button>
        </div>
    </div>
  )
}