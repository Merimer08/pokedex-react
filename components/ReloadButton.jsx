import React from 'react';

export const ReloadButton = ({ onReload, isLoading }) => {
    return (
        <button
            onClick={onReload}
            disabled={isLoading}
            className="fixed bottom-6 right-6 p-4 bg-red-600 hover:bg-red-700 disabled:bg-gray-400 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-40"
            aria-label="Recargar datos"
        >
            <svg 
                className={`w-6 h-6 ${isLoading ? 'animate-spin' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
            >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
        </button>
    );
};
