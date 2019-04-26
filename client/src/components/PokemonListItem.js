import React from 'react'

const PokemonListItem = (props) => {
  return (

    <div className="pokemonItem">
      <div>Name: {props.pokemon.name}</div>
      <div>Id: Pokemon {props.pokemon.id}</div>
      <img src={props.pokemon.sprites.front_default} alt="pokemon image" />
    </div>

  )
}



export default PokemonListItem
