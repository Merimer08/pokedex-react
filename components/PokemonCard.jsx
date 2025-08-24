import React from 'react';
import { TYPE_GRADIENTS } from '../constants';

export const PokemonCard = ({ pokemon, onCardClick, isFavorite, onToggleFavorite }) => {
    const primaryType = pokemon.types[0]?.type.name || 'normal';
    const secondaryType = pokemon.types[1]?.type.name;
    const gradient = TYPE_GRADIENTS[primaryType] || TYPE_GRADIENTS['normal'];

    const cardGradient = secondaryType 
        ? `bg-gradient-to-br ${TYPE_GRADIENTS[primaryType]} to-${TYPE_GRADIENTS[secondaryType].split('-')[1]}-${TYPE_GRADIENTS[secondaryType].split('-')[2]}`
        : `bg-gradient-to-br ${gradient}`;

    const handleFavoriteClick = (e) => {
        e.stopPropagation();
        onToggleFavorite(pokemon.id);
    };

    return (
        <div 
            className={`rounded-lg shadow-lg overflow-hidden cursor-pointer transform hover:scale-105 transition-transform duration-300 ease-in-out group ${cardGradient} relative`}
            onClick={() => onCardClick(pokemon)}
        >
            {/* Favorite Button */}
            <button
                onClick={handleFavoriteClick}
                className="absolute top-2 left-2 z-10 p-1 rounded-full bg-black bg-opacity-30 hover:bg-opacity-50 transition-all duration-200"
                aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
            >
                <svg 
                    className={`w-5 h-5 ${isFavorite ? 'text-yellow-400' : 'text-white'}`} 
                    fill={isFavorite ? 'currentColor' : 'none'} 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
            </button>

            <div className="bg-black bg-opacity-20 p-4 flex flex-col items-center relative">
                <img
                    className="w-24 h-24 sm:w-28 sm:h-28 transition-transform duration-300 group-hover:scale-110"
                    src={pokemon.sprites.other['official-artwork'].front_default || pokemon.sprites.front_default}
                    alt={pokemon.name}
                    loading="lazy"
                />
                <span className="absolute top-2 right-3 text-sm font-bold text-white opacity-60">
                    #{pokemon.id.toString().padStart(3, '0')}
                </span>
            </div>
            <div className="bg-gray-800 dark:bg-gray-700 bg-opacity-80 dark:bg-opacity-80 px-4 py-3 text-center">
                <h3 className="text-md sm:text-lg font-bold capitalize text-white truncate">{pokemon.name}</h3>
            </div>
        </div>
    );
};
