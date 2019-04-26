import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import pokemon from '../../data/fakePokemonData';
import getPokemon from '../../lib/getPokemon';

//TODO
ReactDOM.render(<App getPokemon={getPokemon}/>, document.getElementById('app'))