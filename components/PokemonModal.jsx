import React, { useState, useEffect } from 'react';
import { TypeBadge } from './TypeBadge';
import { EvolutionChain } from './EvolutionChain';
import { TYPE_GRADIENTS } from '../constants';
import { RadarChart, PolarGrid, PolarAngleAxis, Radar, ResponsiveContainer, Tooltip } from 'recharts';

const StatChart = ({ stats }) => {
    const statNameMapping = {
        'hp': 'HP', 'attack': 'ATK', 'defense': 'DEF',
        'special-attack': 'Sp. ATK', 'special-defense': 'Sp. DEF', 'speed': 'SPD',
    };

    const data = stats.map(stat => ({
        subject: statNameMapping[stat.stat.name] || stat.stat.name,
        value: stat.base_stat,
        fullMark: 200,
    }));

    return (
        <div className="w-full h-64 md:h-80">
            <ResponsiveContainer>
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
                    <PolarGrid className="stroke-gray-300 dark:stroke-gray-700" />
                    <PolarAngleAxis dataKey="subject" tick={{ fill: 'var(--recharts-text-color, #666)', fontSize: 12 }} className="fill-gray-600 dark:fill-gray-300" />
                    <Radar dataKey="value" stroke="#F87171" fill="#F87171" fillOpacity={0.6} />
                    <Tooltip 
                        contentStyle={{ backgroundColor: 'var(--tooltip-bg, #fff)', border: '1px solid var(--tooltip-border, #ccc)' }} 
                        wrapperClassName="!bg-white dark:!bg-gray-800 !border-gray-300 dark:!border-gray-600 rounded-md shadow-lg"
                    />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    );
};

const AbilitiesSection = ({ abilities }) => {
    return (
        <div className="mt-4 sm:mt-6 bg-white dark:bg-gray-900/50 p-3 sm:p-4 rounded-lg">
            <h3 className="text-lg sm:text-xl font-bold text-center mb-3 sm:mb-4 border-b-2 border-gray-300 dark:border-gray-700 pb-2">
                Habilidades
            </h3>
            <div className="grid gap-3">
                {abilities.map((ability, index) => (
                    <div key={index} className="flex flex-col sm:flex-row items-start sm:items-center justify-between bg-gray-100 dark:bg-gray-800/50 p-3 rounded-lg">
                        <span className="text-base font-semibold text-gray-800 dark:text-white capitalize mb-2 sm:mb-0">
                            {ability.ability.name.replace('-', ' ')}
                        </span>
                        {ability.is_hidden && (
                            <span className="px-3 py-1 bg-purple-600 text-white text-sm font-bold rounded-full whitespace-nowrap">
                                Habilidad Oculta
                            </span>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export const PokemonModal = ({ pokemonList, selectedPokemonId, onClose, onNavigate, isFavorite, onToggleFavorite, onEvolutionPokemonClick }) => {
    const [pokemon, setPokemon] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchAndSetPokemon = async () => {
            if (selectedPokemonId === null) return;
            setIsLoading(true);
            try {
                const pokemonData = pokemonList.find(p => p.id === selectedPokemonId);
                if (pokemonData) {
                    setPokemon(pokemonData);
                }
            } catch (error) {
                console.error("Failed to fetch pokemon details for modal:", error);
                setPokemon(null);
            } finally {
                setIsLoading(false);
            }
        };
        fetchAndSetPokemon();
    }, [selectedPokemonId, pokemonList]);
    
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Escape') onClose();
            else if (event.key === 'ArrowRight') onNavigate('next');
            else if (event.key === 'ArrowLeft') onNavigate('prev');
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [onClose, onNavigate]);

    // Handle evolution chain Pokémon click
    const handleEvolutionPokemonClick = (pokemonId) => {
        if (onEvolutionPokemonClick) {
            onEvolutionPokemonClick(pokemonId);
        }
    };

    if (!pokemon && isLoading) {
        return (
            <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-center items-center">
                <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-red-500"></div>
            </div>
        );
    }
    
    if (!pokemon) return null;

    const primaryType = pokemon.types[0].type.name;
    const gradient = TYPE_GRADIENTS[primaryType] || TYPE_GRADIENTS['normal'];
    const lightTypes = new Set(['normal', 'electric', 'ice', 'fairy']);
    const isLightBackground = lightTypes.has(primaryType);
    const headerTextColor = isLightBackground ? 'text-gray-900' : 'text-white';
    
    return (
        <div 
            className="fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-center items-center p-2 sm:p-4"
            onClick={onClose}
        >
            <div
                className="relative w-full max-w-4xl bg-gray-200 dark:bg-gray-800 rounded-lg shadow-2xl animate-fade-in-up overflow-hidden"
                onClick={(e) => e.stopPropagation()}
                style={{ maxHeight: '90vh' }}
            >
                <div className="absolute top-2 right-2 z-30 flex gap-2">
                     <button onClick={onToggleFavorite} className={`p-2 rounded-full transition-colors ${isFavorite ? 'text-yellow-400 bg-black/30' : 'text-white/70 hover:text-white bg-black/20'}`} aria-label="Toggle Favorite">
                        <svg className="w-6 h-6 sm:w-7 sm:h-7" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z"/></svg>
                    </button>
                    <button onClick={onClose} className="p-2 rounded-full text-white/80 hover:text-white bg-black/20 transition-colors" aria-label="Close modal">
                        <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                    </button>
                </div>
                
                <button onClick={() => onNavigate('prev')} className="absolute left-2 top-1/2 -translate-y-1/2 z-30 p-2 bg-black/30 rounded-full hover:bg-black/50 transition-colors" aria-label="Previous Pokémon">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                </button>
                <button onClick={() => onNavigate('next')} className="absolute right-2 top-1/2 -translate-y-1/2 z-30 p-2 bg-black/30 rounded-full hover:bg-black/50 transition-colors" aria-label="Next Pokémon">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </button>

                <div className="overflow-y-auto" style={{ maxHeight: 'calc(90vh - 2rem)' }}>
                    <div key={pokemon.id} className="animate-fade-in">
                        {/* Header Section */}
                        <div className={`pt-6 sm:pt-8 pb-4 text-center bg-gradient-to-br ${gradient}`}>
                            <span className={`text-lg sm:text-2xl font-bold ${headerTextColor} opacity-70`}>#{pokemon.id.toString().padStart(3, '0')}</span>
                            <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold capitalize my-1 ${headerTextColor}`} style={{textShadow: '1px 1px 3px rgba(0,0,0,0.4)'}}>{pokemon.name}</h2>
                            <div className="flex justify-center gap-2 mt-2">
                                {pokemon.types.map(({ type }) => <TypeBadge key={type.name} typeName={type.name} />)}
                            </div>
                            <div className="flex justify-center relative z-10 -mb-16 sm:-mb-20">
                                <img src={pokemon.sprites.other['official-artwork'].front_default} alt={pokemon.name} className="w-32 h-32 sm:w-48 sm:h-48 md:w-56 md:h-56 drop-shadow-2xl"/>
                            </div>
                        </div>

                        {/* Content Section */}
                        <div className="p-4 sm:p-6 pt-20 sm:pt-24 bg-gray-200 dark:bg-gray-800">
                            {/* Stats Section */}
                            <div className="bg-white dark:bg-gray-900/50 p-3 sm:p-4 rounded-lg">
                                <h3 className="text-lg sm:text-xl font-bold text-center mb-3 sm:mb-4 border-b-2 border-gray-300 dark:border-gray-700 pb-2">
                                    Estadísticas Base
                                </h3>
                                <StatChart stats={pokemon.stats} />
                            </div>

                            {/* Details Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-4 sm:mt-6">
                                <div className="bg-white dark:bg-gray-900/50 p-3 sm:p-4 rounded-lg">
                                    <h3 className="text-lg sm:text-xl font-bold text-center mb-3 sm:mb-4 border-b-2 border-gray-300 dark:border-gray-700 pb-2">
                                        Detalles
                                    </h3>
                                    <div className="grid grid-cols-2 gap-3 sm:gap-4 text-sm sm:text-base">
                                        <div className="text-center text-gray-600 dark:text-gray-300">
                                            Altura: <span className="block font-bold text-gray-800 dark:text-white">{pokemon.height / 10} m</span>
                                        </div>
                                        <div className="text-center text-gray-600 dark:text-gray-300">
                                            Peso: <span className="block font-bold text-gray-800 dark:text-white">{pokemon.weight / 10} kg</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-white dark:bg-gray-900/50 p-3 sm:p-4 rounded-lg">
                                    <h3 className="text-lg sm:text-xl font-bold text-center mb-3 sm:mb-4 border-b-2 border-gray-300 dark:border-gray-700 pb-2">
                                        Tipos
                                    </h3>
                                    <div className="flex flex-wrap justify-center gap-2">
                                        {pokemon.types.map(({ type }) => (
                                            <TypeBadge key={type.name} typeName={type.name} />
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Evolution Chain Section */}
                            <div className="mt-4 sm:mt-6 bg-white dark:bg-gray-900/50 p-3 sm:p-4 rounded-lg">
                                <h3 className="text-lg sm:text-xl font-bold text-center mb-3 sm:mb-4 border-b-2 border-gray-300 dark:border-gray-700 pb-2">
                                    Línea Evolutiva
                                </h3>
                                <EvolutionChain 
                                    speciesUrl={pokemon.species.url} 
                                    currentPokemonId={pokemon.id}
                                    onPokemonClick={handleEvolutionPokemonClick}
                                />
                            </div>

                            {/* Abilities Section - Now at the bottom */}
                            <AbilitiesSection abilities={pokemon.abilities} />
                        </div>
                    </div>
                </div>
            </div>
             <style>{`
                @keyframes fade-in-up { 0% { opacity: 0; transform: translateY(20px); } 100% { opacity: 1; transform: translateY(0); } }
                .animate-fade-in-up { animation: fade-in-up 0.3s ease-out forwards; }
                @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
                .animate-fade-in { animation: fade-in 0.3s ease-out forwards; }
                .dark .recharts-polar-angle-axis-tick-value { fill: #E2E8F0 !important; } .light .recharts-polar-angle-axis-tick-value { fill: #4A5568 !important; }
             `}</style>
        </div>
    );
};
