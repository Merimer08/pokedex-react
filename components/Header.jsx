import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

const PokeballIcon = () => (
    <svg className="w-8 h-8 md:w-10 md:h-10 text-white" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8zm0 3c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 2c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3z" fill="#F87171"/>
        <path d="M4 12c0 .28.02.55.05.82l1.96.98c-.02-.27-.01-.54 0-.8H4zM20 12c0-.28-.02-.55-.05-.82l-1.96.98c.02.27.01.54 0 .8H20z" fill="white"/>
        <path d="M12 12H4.18c.08 3.53 2.53 6.43 5.82 7.5L12 12zm0 0h7.82c-.08 3.53-2.53 6.43-5.82 7.5L12 12z" fill="#EF4444"/>
        <path d="M12 12H4.18c-.08-3.53 2.53-6.43 5.82-7.5L12 12zm0 0h7.82c.08 3.53 2.53 6.43 5.82 7.5L12 12z" fill="white"/>
        <circle cx="12" cy="12" r="3" fill="white"/>
        <circle cx="12" cy="12" r="1.5" fill="#374151"/>
    </svg>
);

const ThemeToggle = () => {
    const { isDarkMode, toggleTheme } = useTheme();
    
    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
            aria-label="Toggle theme"
        >
            {isDarkMode ? (
                <svg className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                </svg>
            ) : (
                <svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
            )}
        </button>
    );
};

export const Header = () => {
    return (
        <header className="bg-red-600 dark:bg-red-700 sticky top-0 z-50 shadow-lg">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <div className="flex items-center">
                    <PokeballIcon />
                    <h1 className="text-2xl md:text-4xl text-white font-press-start ml-4 tracking-wider" style={{ textShadow: '2px 2px 0 #3B82F6, 4px 4px 0 #000' }}>
                        Pokédex
                    </h1>
                </div>
                <ThemeToggle />
            </div>
        </header>
    );
};
