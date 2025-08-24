import { POKEAPI_BASE_URL, POKEMON_TOTAL } from '../constants';

// A simple in-memory cache to avoid re-fetching the full list
let allPokemonListCache = null;

export const fetchAllPokemonList = async () => {
    if (allPokemonListCache) {
        return allPokemonListCache;
    }
    const response = await fetch(`${POKEAPI_BASE_URL}/pokemon?limit=${POKEMON_TOTAL}`);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await response.json();
    allPokemonListCache = data.results;
    return data.results;
};

export const fetchPokemonDetails = async (urlOrId) => {
    const url = typeof urlOrId === 'string' ? urlOrId : `${POKEAPI_BASE_URL}/pokemon/${urlOrId}`;
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Failed to fetch details from ${url}`);
    }
    const data = await response.json();
    return data;
};

export const fetchPokemonByType = async (type) => {
    const response = await fetch(`${POKEAPI_BASE_URL}/type/${type}`);
    if (!response.ok) {
        throw new Error(`Failed to fetch pokemon for type ${type}`);
    }
    const data = await response.json();
    // The shape is { pokemon: [{ pokemon: { name, url } }] }
    return data.pokemon.map((p) => p.pokemon);
};

export const fetchPokemonSpecies = async (urlOrId) => {
    const url = typeof urlOrId === 'string' ? urlOrId : `${POKEAPI_BASE_URL}/pokemon-species/${urlOrId}`;
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Failed to fetch species from ${url}`);
    }
    return response.json();
};

export const fetchEvolutionChain = async (url) => {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Failed to fetch evolution chain from ${url}`);
    }
    return response.json();
};
