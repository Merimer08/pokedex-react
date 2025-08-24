import React from 'react';

export const Spinner = ({ size = 'default', variant = 'pokeball' }) => {
    const sizeClasses = {
        small: 'w-8 h-8',
        default: 'w-16 h-16',
        large: 'w-24 h-24'
    };

    if (variant === 'dots') {
        return (
            <div className="flex justify-center items-center space-x-2">
                <div className={`${sizeClasses[size]} flex space-x-1`}>
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-yellow-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
            </div>
        );
    }

    if (variant === 'ring') {
        return (
            <div className="flex justify-center items-center">
                <div className={`${sizeClasses[size]} border-4 border-gray-300 border-t-red-500 rounded-full animate-spin`}></div>
            </div>
        );
    }

    // Default pokeball spinner
    return (
        <div className="flex justify-center items-center">
            <div className={`pokeball ${sizeClasses[size]}`}></div>
            <style>{`
                .pokeball {
                    background-color: #fff;
                    border-radius: 50%;
                    position: relative;
                    box-shadow: 0 0 20px rgba(0,0,0,0.2);
                    border: 3px solid #333;
                    animation: spin 1s linear infinite;
                }
                .pokeball:before {
                    content: '';
                    position: absolute;
                    top: calc(50% - 3px);
                    left: 0;
                    width: 100%;
                    height: 6px;
                    background-color: #333;
                }
                .pokeball:after {
                    content: '';
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    width: 18px;
                    height: 18px;
                    background-color: #fff;
                    border: 3px solid #333;
                    border-radius: 50%;
                    z-index: 1;
                }
                .pokeball {
                    background: linear-gradient(to bottom, #ef4444 0%, #ef4444 50%, #fff 50%, #fff 100%);
                }
                @keyframes spin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
            `}</style>
        </div>
    );
};
