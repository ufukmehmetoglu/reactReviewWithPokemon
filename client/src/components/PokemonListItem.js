import React from 'react'

const PokemonListItem = (props) => {
  return (

    <div className="pokemonItem">
      <div onClick={()=>props.handleEdit(props.index)} >Name: {props.pokemon.name}  </div>
      <div>Id: Pokemon {props.pokemon.id}</div>
      <img src={props.pokemon.sprites.front_default} alt="pokemon image" />
    </div>

  )
}



export default PokemonListItem
