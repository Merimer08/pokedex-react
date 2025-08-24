import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Header } from './components/Header';
import { SearchBar } from './components/SearchBar';
import { TypeFilter } from './components/TypeFilter';
import { CollectionStats } from './components/CollectionStats';
import { PokemonGrid } from './components/PokemonGrid';
import { PokemonModal } from './components/PokemonModal';
import { Spinner } from './components/Spinner';
import { Pagination } from './components/Pagination';
import { ReloadButton } from './components/ReloadButton';
import { fetchAllPokemonList, fetchPokemonDetails, fetchPokemonByType } from './services/pokeapi';
import { POKEMON_BATCH_LIMIT } from './constants';
import { useFavorites } from './hooks/useFavorites';
import { ThemeProvider } from './contexts/ThemeContext';

const AppContent = () => {
    const [allPokemonIndex, setAllPokemonIndex] = useState([]);
    const [displayedPokemon, setDisplayedPokemon] = useState([]);
    const [selectedPokemonId, setSelectedPokemonId] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [showFavorites, setShowFavorites] = useState(false);
    const [selectedType, setSelectedType] = useState(null);
    
    const { favorites, toggleFavorite, isFavorite } = useFavorites();

    // Load initial Pokémon list based on selected type
    const loadPokemonList = useCallback(async () => {
        try {
            setIsLoading(true);
            setError(null);
            let pokemonList;
            if (selectedType) {
                pokemonList = await fetchPokemonByType(selectedType);
            } else {
                pokemonList = await fetchAllPokemonList();
            }
            setAllPokemonIndex(pokemonList);
        } catch (err) {
            setError('Failed to fetch Pokémon list. Please check your connection.');
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    }, [selectedType]);

    useEffect(() => {
        loadPokemonList();
    }, [loadPokemonList]);

    // Calculate total pages
    const totalPages = Math.ceil(allPokemonIndex.length / POKEMON_BATCH_LIMIT);

    // Filter Pokémon based on current state
    const filteredPokemonSource = useMemo(() => {
        let source = allPokemonIndex;

        if (showFavorites) {
            const favoriteIds = new Set(favorites);
            source = source.filter(p => favoriteIds.has(parseInt(p.url.split('/')[6])));
        }

        if (searchTerm.trim() !== '') {
            source = source.filter(p => p.name.includes(searchTerm.toLowerCase()));
        }

        return source;
    }, [allPokemonIndex, searchTerm, showFavorites, favorites]);

    // Load Pokémon for current page
    useEffect(() => {
        if (filteredPokemonSource.length === 0) {
            setDisplayedPokemon([]);
            setIsLoading(false);
            return;
        }

        const loadPokemonForPage = async () => {
            setIsLoading(true);
            const startIndex = (currentPage - 1) * POKEMON_BATCH_LIMIT;
            const endIndex = startIndex + POKEMON_BATCH_LIMIT;
            const batch = filteredPokemonSource.slice(startIndex, endIndex);
            
            try {
                const detailedBatch = await Promise.all(batch.map(p => fetchPokemonDetails(p.url)));
                setDisplayedPokemon(detailedBatch);
                setError(null);
            } catch (err) {
                setError('Failed to fetch Pokémon details.');
                console.error(err);
            } finally {
                setIsLoading(false);
            }
        };

        loadPokemonForPage();
    }, [filteredPokemonSource, currentPage]);

    // Handle search
    const handleSearch = async (term) => {
        setSearchTerm(term);
        setCurrentPage(1);
        
        if (term.trim() === '') {
            setShowFavorites(false);
            return;
        }
    };

    // Handle favorites toggle
    const handleToggleFavorites = () => {
        setShowFavorites(!showFavorites);
        setSearchTerm('');
        setCurrentPage(1);
    };

    // Handle type selection
    const handleTypeSelect = (type) => {
        setSelectedType(type);
        setCurrentPage(1);
        setSearchTerm('');
        setShowFavorites(false);
    };

    // Handle page change
    const handlePageChange = (page) => {
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Handle card click
    const handleCardClick = (pokemon) => {
        setSelectedPokemonId(pokemon.id);
    };

    // Handle modal close
    const handleCloseModal = () => {
        setSelectedPokemonId(null);
    };

    // Handle Pokémon navigation in modal
    const handlePokemonNavigation = useCallback((direction) => {
        if (!selectedPokemonId || displayedPokemon.length <= 1) return;

        const currentIndex = displayedPokemon.findIndex(p => p.id === selectedPokemonId);
        if (currentIndex === -1) return;

        let nextIndex;
        if (direction === 'next') {
            nextIndex = (currentIndex + 1) % displayedPokemon.length;
        } else {
            nextIndex = (currentIndex - 1 + displayedPokemon.length) % displayedPokemon.length;
        }

        const nextPokemon = displayedPokemon[nextIndex];
        if (nextPokemon) {
            setSelectedPokemonId(nextPokemon.id);
        }
    }, [selectedPokemonId, displayedPokemon]);

    // Handle evolution chain Pokémon click
    const handleEvolutionPokemonClick = useCallback(async (pokemonId) => {
        try {
            // Check if the Pokémon is already in the current displayed list
            const existingPokemon = displayedPokemon.find(p => p.id === pokemonId);
            
            if (existingPokemon) {
                // If it exists, just switch to it
                setSelectedPokemonId(pokemonId);
            } else {
                // If it doesn't exist, fetch it and add to the list
                const newPokemon = await fetchPokemonDetails(pokemonId);
                setDisplayedPokemon(prev => [...prev, newPokemon]);
                setSelectedPokemonId(pokemonId);
            }
        } catch (error) {
            console.error('Failed to fetch evolution Pokémon:', error);
        }
    }, [displayedPokemon]);

    const hasResults = filteredPokemonSource.length > 0;
    const isSearching = searchTerm.trim() !== '';
    const showPagination = !isSearching && !showFavorites && selectedType === null && allPokemonIndex.length > 0;
    const showTypeFilter = !isSearching && !showFavorites;

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white font-roboto pb-12 transition-colors duration-300">
            <Header />
            <main className="container mx-auto px-4">
                <SearchBar 
                    searchTerm={searchTerm} 
                    onSearch={handleSearch}
                    showFavorites={showFavorites}
                    onToggleFavorites={handleToggleFavorites}
                    favoritesCount={favorites.length}
                />
                
                {/* Type Filter */}
                {showTypeFilter && (
                    <TypeFilter 
                        selectedType={selectedType}
                        onSelectType={handleTypeSelect}
                    />
                )}
                
                {isLoading && displayedPokemon.length === 0 ? (
                    <div className="flex justify-center items-center h-64">
                        <Spinner size="large" variant="pokeball" />
                    </div>
                ) : error ? (
                    <div className="text-center py-16">
                        <p className="text-red-500 text-lg mb-4">{error}</p>
                        <button 
                            onClick={loadPokemonList}
                            className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
                        >
                            Reintentar
                        </button>
                    </div>
                ) : !hasResults ? (
                    <div className="text-center py-16">
                        <p className="text-xl text-gray-600 dark:text-gray-400">
                            {showFavorites 
                                ? 'No tienes Pokémon favoritos aún. ¡Marca algunos con la estrella!'
                                : selectedType
                                ? `No se encontraron Pokémon del tipo ${selectedType}`
                                : isSearching 
                                ? `No se encontraron Pokémon para "${searchTerm}"`
                                : 'No hay Pokémon para mostrar'
                            }
                        </p>
                    </div>
                ) : (
                    <>
                        <PokemonGrid
                            pokemonList={displayedPokemon}
                            onCardClick={handleCardClick}
                            isFavorite={isFavorite}
                            onToggleFavorite={toggleFavorite}
                        />
                        
                        {/* Collection Stats - Now below the Pokémon grid */}
                        <CollectionStats 
                            totalPokemon={allPokemonIndex.length}
                            favoritesCount={favorites.length}
                            currentPage={currentPage}
                            totalPages={totalPages}
                            showFavorites={showFavorites}
                            searchTerm={searchTerm}
                        />
                        
                        {showPagination && (
                            <Pagination
                                currentPage={currentPage}
                                totalPages={totalPages}
                                onPageChange={handlePageChange}
                            />
                        )}
                    </>
                )}
            </main>
            
            {/* Reload Button */}
            <ReloadButton onReload={loadPokemonList} isLoading={isLoading} />
            
            {selectedPokemonId && (
                <PokemonModal 
                    pokemonList={displayedPokemon}
                    selectedPokemonId={selectedPokemonId}
                    onClose={handleCloseModal}
                    onNavigate={handlePokemonNavigation}
                    isFavorite={isFavorite(selectedPokemonId)}
                    onToggleFavorite={() => toggleFavorite(selectedPokemonId)}
                    onEvolutionPokemonClick={handleEvolutionPokemonClick}
                />
            )}
        </div>
    );
};

const App = () => {
    return (
        <ThemeProvider>
            <AppContent />
        </ThemeProvider>
    );
};

export default App;
