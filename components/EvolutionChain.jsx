import React, { useState, useEffect } from 'react';
import { fetchPokemonSpecies, fetchEvolutionChain } from '../services/pokeapi';

const EvolutionStageCard = ({ name, imageUrl, id, onPokemonClick, isCurrentPokemon }) => (
    <div 
        className={`flex flex-col items-center text-center cursor-pointer transition-all duration-200 hover:scale-105 ${
            isCurrentPokemon ? 'ring-2 ring-red-500 ring-offset-2 ring-offset-gray-200 dark:ring-offset-gray-800' : ''
        }`}
        onClick={() => onPokemonClick(id)}
        title={`Ver ${name}`}
    >
        <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 p-2 bg-gray-200 dark:bg-gray-700/50 rounded-full flex items-center justify-center hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
            <img src={imageUrl} alt={name} className="w-full h-full object-contain drop-shadow-lg" />
        </div>
        <p className="mt-2 capitalize font-bold text-xs sm:text-sm md:text-base text-gray-800 dark:text-white">
            {name}
        </p>
        {isCurrentPokemon && (
            <span className="text-xs text-red-600 dark:text-red-400 font-semibold mt-1">
                Actual
            </span>
        )}
    </div>
);

const ArrowIcon = () => (
    <div className="self-center hidden sm:block">
        <svg className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
        </svg>
    </div>
);

export const EvolutionChain = ({ speciesUrl, currentPokemonId, onPokemonClick }) => {
    const [evolutionChain, setEvolutionChain] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const getEvolutionChain = async () => {
            setIsLoading(true);
            try {
                const species = await fetchPokemonSpecies(speciesUrl);
                const chainData = await fetchEvolutionChain(species.evolution_chain.url);
                
                const parsedChain = [];
                let currentLink = chainData.chain;

                while (currentLink) {
                    const speciesUrlParts = currentLink.species.url.split('/');
                    const id = speciesUrlParts[speciesUrlParts.length - 2];
                    parsedChain.push({
                        name: currentLink.species.name,
                        id: parseInt(id),
                        imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
                    });
                    currentLink = currentLink.evolves_to[0];
                }
                setEvolutionChain(parsedChain);
            } catch (error) {
                console.error("Failed to fetch evolution chain:", error);
                setEvolutionChain(null);
            } finally {
                setIsLoading(false);
            }
        };
        getEvolutionChain();
    }, [speciesUrl]);

    if (isLoading) {
        return (
            <div className="text-center p-4">
                <div className="inline-block animate-spin rounded-full h-6 w-6 border-b-2 border-red-500"></div>
                <p className="mt-2 text-sm sm:text-base text-gray-600 dark:text-gray-400">Cargando línea evolutiva...</p>
            </div>
        );
    }

    if (!evolutionChain || evolutionChain.length <= 1) {
        return (
            <div className="text-center p-4 text-gray-500 dark:text-gray-400">
                <svg className="w-8 h-8 sm:w-12 sm:h-12 mx-auto mb-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.47-.881-6.08-2.33"></path>
                </svg>
                <p className="text-sm sm:text-base">Este Pokémon no evoluciona.</p>
            </div>
        );
    }

    return (
        <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-4 p-2 sm:p-4">
            {evolutionChain.map((stage, index) => (
                <React.Fragment key={stage.id}>
                    <EvolutionStageCard 
                        {...stage} 
                        onPokemonClick={onPokemonClick}
                        isCurrentPokemon={stage.id === currentPokemonId}
                    />
                    {index < evolutionChain.length - 1 && <ArrowIcon />}
                </React.Fragment>
            ))}
        </div>
    );
};
