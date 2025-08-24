import React from 'react';

export const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const getPageNumbers = () => {
        const pages = [];
        const maxVisiblePages = 5;
        
        if (totalPages <= maxVisiblePages) {
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
        } else {
            if (currentPage <= 3) {
                for (let i = 1; i <= 4; i++) {
                    pages.push(i);
                }
                pages.push('...');
                pages.push(totalPages);
            } else if (currentPage >= totalPages - 2) {
                pages.push(1);
                pages.push('...');
                for (let i = totalPages - 3; i <= totalPages; i++) {
                    pages.push(i);
                }
            } else {
                pages.push(1);
                pages.push('...');
                for (let i = currentPage - 1; i <= currentPage + 1; i++) {
                    pages.push(i);
                }
                pages.push('...');
                pages.push(totalPages);
            }
        }
        
        return pages;
    };

    if (totalPages <= 1) return null;

    return (
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-2 mt-8 mb-4">
            <div className="flex items-center space-x-2">
                <button
                    onClick={() => onPageChange(1)}
                    disabled={currentPage === 1}
                    className="px-3 py-2 rounded-lg bg-gray-700 dark:bg-gray-600 text-white hover:bg-gray-600 dark:hover:bg-gray-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-sm"
                    aria-label="Primera página"
                >
                    ⏮️
                </button>
                
                <button
                    onClick={() => onPageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="px-4 py-2 rounded-lg bg-gray-700 dark:bg-gray-600 text-white hover:bg-gray-600 dark:hover:bg-gray-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                    ← Anterior
                </button>
            </div>
            
            <div className="flex items-center space-x-1">
                {getPageNumbers().map((page, index) => (
                    <button
                        key={index}
                        onClick={() => typeof page === 'number' && onPageChange(page)}
                        disabled={page === '...'}
                        className={`px-3 py-2 rounded-lg transition-all duration-200 text-sm font-medium ${
                            page === currentPage
                                ? 'bg-red-600 text-white shadow-lg scale-110'
                                : page === '...'
                                ? 'text-gray-400 cursor-default px-2'
                                : 'bg-gray-700 dark:bg-gray-600 text-white hover:bg-gray-600 dark:hover:bg-gray-500 hover:scale-105'
                        }`}
                    >
                        {page}
                    </button>
                ))}
            </div>
            
            <div className="flex items-center space-x-2">
                <button
                    onClick={() => onPageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 rounded-lg bg-gray-700 dark:bg-gray-600 text-white hover:bg-gray-600 dark:hover:bg-gray-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                    Siguiente →
                </button>
                
                <button
                    onClick={() => onPageChange(totalPages)}
                    disabled={currentPage === totalPages}
                    className="px-3 py-2 rounded-lg bg-gray-700 dark:bg-gray-600 text-white hover:bg-gray-600 dark:hover:bg-gray-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-sm"
                    aria-label="Última página"
                >
                    ⏭️
                </button>
            </div>
        </div>
    );
};
