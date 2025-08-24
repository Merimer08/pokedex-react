import React from 'react';
import { POKEMON_TYPES, TYPE_COLORS } from '../constants';

export const TypeFilter = ({ selectedType, onSelectType }) => {
    const types = ['all', ...POKEMON_TYPES];

    return (
        <div className="pb-4 sm:pb-6">
            <div className="relative">
                <div className="flex space-x-2 sm:space-x-3 overflow-x-auto pb-3 sm:pb-4 -mb-3 sm:-mb-4 scrollbar-thin">
                    {types.map(type => {
                        const isActive = (selectedType === type) || (type === 'all' && selectedType === null);
                        const baseClasses = "px-3 sm:px-4 py-2 text-xs sm:text-sm font-bold capitalize rounded-full shadow-md border-2 transition-transform duration-200 ease-in-out cursor-pointer whitespace-nowrap";
                        const activeClasses = "scale-105 ring-2 ring-offset-2 dark:ring-offset-gray-900 ring-red-500";
                        const inactiveClasses = "hover:scale-105";

                        if (type === 'all') {
                            return (
                                <button
                                    key={type}
                                    onClick={() => onSelectType(null)}
                                    className={`${baseClasses} ${isActive ? `${activeClasses} bg-red-500 border-red-600 text-white` : `${inactiveClasses} bg-gray-200 dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300`}`}
                                >
                                    All Types
                                </button>
                            );
                        }

                        const colorClass = TYPE_COLORS[type] || 'bg-gray-400 border-gray-500';

                        return (
                            <button
                                key={type}
                                onClick={() => onSelectType(type)}
                                className={`${baseClasses} text-white text-shadow ${colorClass} ${isActive ? activeClasses : inactiveClasses}`}
                            >
                                {type}
                            </button>
                        );
                    })}
                </div>
                <style>{`
                    .scrollbar-thin::-webkit-scrollbar {
                        height: 4px;
                    }
                    .scrollbar-thin::-webkit-scrollbar-track {
                        background: transparent;
                    }
                    .scrollbar-thin::-webkit-scrollbar-thumb {
                        background-color: rgba(156, 163, 175, 0.5);
                        border-radius: 20px;
                        border: 3px solid transparent;
                    }
                    html.dark .scrollbar-thin::-webkit-scrollbar-thumb {
                         background-color: rgba(75, 85, 99, 0.7);
                    }
                    .text-shadow { text-shadow: 1px 1px 2px rgba(0,0,0,0.5) }
                    
                    @media (max-width: 640px) {
                        .scrollbar-thin::-webkit-scrollbar {
                            height: 3px;
                        }
                    }
                `}</style>
            </div>
        </div>
    );
};
