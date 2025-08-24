import React from 'react';

export const SearchBar = ({ searchTerm, onSearch, showFavorites, onToggleFavorites, favoritesCount }) => {
    return (
        <div className="py-8">
            <div className="flex flex-col md:flex-row gap-4 items-center">
                <div className="relative flex-1">
                    <input
                        type="text"
                        placeholder="Search for a Pokémon..."
                        value={searchTerm}
                        onChange={(e) => onSearch(e.target.value)}
                        className="w-full bg-gray-800 dark:bg-gray-700 border-2 border-gray-600 dark:border-gray-500 rounded-full py-3 px-6 text-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
                    />
                    <svg className="absolute right-6 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                </div>
                
                <button
                    onClick={onToggleFavorites}
                    className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${
                        showFavorites
                            ? 'bg-yellow-500 hover:bg-yellow-600 text-white'
                            : 'bg-gray-700 dark:bg-gray-600 hover:bg-gray-600 dark:hover:bg-gray-500 text-white'
                    }`}
                >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    Favoritos ({favoritesCount})
                </button>
            </div>
        </div>
    );
};
