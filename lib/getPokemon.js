import axios from 'axios';

const getPokemon = (query, callback) => {
  axios.get(`https://pokeapi.co/api/v2/pokemon/${query}/`)
  .then(data => {
    callback(data)
    console.log(data);
  })
  .catch(error => console.log(error))

}

export default getPokemon;