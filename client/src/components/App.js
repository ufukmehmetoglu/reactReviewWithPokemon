import React from 'react'
import PokemonList from './PokemonList'
import Search from './Search'


class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      pokemon: []
    }
    this.getPokemon = this.getPokemon.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }
  componentDidMount() {
    this.setState({
      pokemon: this.state.pokemon
    })
  }
  getPokemon = (query) => {
    this.props.getPokemon(query,({data}) => {
      let {id, name, sprites} = data;
      let copy = this.state.pokemon.slice();
      copy.push({id, name, sprites});
      console.log(copy);
      this.setState({
        pokemon: copy
      });
    })
  }
  handleEdit(index){
    var newPokemon = this.state.pokemon.slice();
    var newName = prompt('Edit !');
    newPokemon[index].name = newName;
    this.setState({
      pokemon: newPokemon
    })
  }
  
  
  render() {
    return (
      <div>
        <Search getPokemon= {this.getPokemon}/> 
        <PokemonList pokemons={this.state.pokemon} handleEdit={this.handleEdit}/>
      </div>
    )
  }

}

export default App
