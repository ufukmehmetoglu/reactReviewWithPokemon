import React from 'react'
import PokemonListItem from './PokemonListItem'

 const PokemonList = (props) => {
  return (
    <div id="pokemonList">
    {props.pokemons.map((pokemon,index) => <PokemonListItem pokemon={pokemon} key={index}/> )}
  </div>
  )
}

export default PokemonList 
