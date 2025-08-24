export const POKEAPI_BASE_URL = 'https://pokeapi.co/api/v2';
export const POKEMON_TOTAL = 1025;
export const POKEMON_BATCH_LIMIT = 24;

export const POKEMON_TYPES = [
  'normal', 'fire', 'water', 'grass', 'electric', 'ice', 'fighting', 'poison', 
  'ground', 'flying', 'psychic', 'bug', 'rock', 'ghost', 'dragon', 'dark', 
  'steel', 'fairy'
];

export const TYPE_COLORS = {
  normal: 'bg-gray-400 dark:bg-gray-500 border-gray-500 dark:border-gray-600',
  fire: 'bg-red-500 dark:bg-red-600 border-red-600 dark:border-red-700',
  water: 'bg-blue-500 dark:bg-blue-600 border-blue-600 dark:border-blue-700',
  grass: 'bg-green-500 dark:bg-green-600 border-green-600 dark:border-green-700',
  electric: 'bg-yellow-400 dark:bg-yellow-500 border-yellow-500 dark:border-yellow-600',
  ice: 'bg-cyan-300 dark:bg-cyan-400 border-cyan-400 dark:border-cyan-500',
  fighting: 'bg-orange-700 dark:bg-orange-800 border-orange-800 dark:border-orange-900',
  poison: 'bg-purple-600 dark:bg-purple-700 border-purple-700 dark:border-purple-800',
  ground: 'bg-yellow-600 dark:bg-yellow-700 border-yellow-700 dark:border-yellow-800',
  flying: 'bg-indigo-400 dark:bg-indigo-500 border-indigo-500 dark:border-indigo-600',
  psychic: 'bg-pink-500 dark:bg-pink-600 border-pink-600 dark:border-pink-700',
  bug: 'bg-lime-500 dark:bg-lime-600 border-lime-600 dark:border-lime-700',
  rock: 'bg-yellow-700 dark:bg-yellow-800 border-yellow-800 dark:border-yellow-900',
  ghost: 'bg-indigo-700 dark:bg-indigo-800 border-indigo-800 dark:border-indigo-900',
  dragon: 'bg-indigo-600 dark:bg-indigo-700 border-indigo-700 dark:border-indigo-800',
  dark: 'bg-gray-700 dark:bg-gray-800 border-gray-800 dark:border-gray-900',
  steel: 'bg-gray-500 dark:bg-gray-600 border-gray-600 dark:border-gray-700',
  fairy: 'bg-pink-300 dark:bg-pink-400 border-pink-400 dark:border-pink-500',
};

export const TYPE_GRADIENTS = {
  normal: 'from-gray-300 to-gray-400',
  fire: 'from-red-500 to-orange-500',
  water: 'from-blue-400 to-cyan-400',
  grass: 'from-green-400 to-lime-500',
  electric: 'from-yellow-300 to-yellow-400',
  ice: 'from-cyan-200 to-blue-300',
  fighting: 'from-orange-600 to-red-600',
  poison: 'from-purple-500 to-fuchsia-600',
  ground: 'from-yellow-600 to-amber-700',
  flying: 'from-indigo-300 to-sky-400',
  psychic: 'from-pink-400 to-purple-500',
  bug: 'from-lime-400 to-green-500',
  rock: 'from-yellow-700 to-stone-500',
  ghost: 'from-indigo-600 to-purple-800',
  dragon: 'from-indigo-500 to-blue-700',
  dark: 'from-gray-600 to-gray-800',
  steel: 'from-gray-400 to-slate-500',
  fairy: 'from-pink-300 to-fuchsia-400',
};
