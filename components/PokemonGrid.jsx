import React from 'react';
import { PokemonCard } from './PokemonCard';

export const PokemonGrid = ({ pokemonList, onCardClick, isFavorite, onToggleFavorite }) => {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
            {pokemonList.map((pokemon) => (
                <PokemonCard 
                    key={pokemon.id} 
                    pokemon={pokemon} 
                    onCardClick={onCardClick}
                    isFavorite={isFavorite(pokemon.id)}
                    onToggleFavorite={onToggleFavorite}
                />
            ))}
        </div>
    );
};
