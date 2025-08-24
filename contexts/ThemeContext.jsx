import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};

export const ThemeProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        try {
            const storedTheme = window.localStorage.getItem('theme');
            return storedTheme ? storedTheme === 'dark' : true; // Default to dark mode
        } catch (error) {
            console.error('Failed to parse theme from localStorage', error);
            return true;
        }
    });

    useEffect(() => {
        try {
            window.localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
            // Apply theme to document body
            document.body.classList.toggle('dark', isDarkMode);
        } catch (error) {
            console.error('Failed to save theme to localStorage', error);
        }
    }, [isDarkMode]);

    const toggleTheme = () => {
        setIsDarkMode(prev => !prev);
    };

    const value = {
        isDarkMode,
        toggleTheme
    };

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
};
