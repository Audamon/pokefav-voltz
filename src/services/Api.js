import axios from 'axios';

function getPokemons(type) {
    const promise = axios.get(`https://pokeapi.co/api/v2/type/${type}`);
    return promise;
}

function getSprite(url){
    const promise = axios.get(url);
    return promise;
}
function searchPokemon(name){
    const promise = axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
    return promise;
}

export { getPokemons, getSprite, searchPokemon };