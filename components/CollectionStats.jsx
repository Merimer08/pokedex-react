import React from 'react';

export const CollectionStats = ({ totalPokemon, favoritesCount, currentPage, totalPages, showFavorites, searchTerm }) => {
    const getStatsMessage = () => {
        if (showFavorites) {
            return `Mostrando ${favoritesCount} Pokémon favoritos`;
        }
        if (searchTerm) {
            return `Resultados de búsqueda para "${searchTerm}"`;
        }
        return `Página ${currentPage} de ${totalPages} - Total: ${totalPokemon} Pokémon`;
    };

    return (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-3 sm:p-4 mb-4 sm:mb-6">
            <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-center gap-1 sm:gap-2">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                    <span>Total: {totalPokemon}</span>
                </div>
                
                <div className="flex items-center gap-1 sm:gap-2">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.518 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.518-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span>Favoritos: {favoritesCount}</span>
                </div>
                
                {!showFavorites && !searchTerm && (
                    <div className="flex items-center gap-1 sm:gap-2">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                        </svg>
                        <span>Página {currentPage} de {totalPages}</span>
                    </div>
                )}
            </div>
            
            <div className="text-center mt-2 sm:mt-3">
                <p className="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200">
                    {getStatsMessage()}
                </p>
            </div>
        </div>
    );
};
