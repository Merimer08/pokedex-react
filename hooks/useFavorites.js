import { useState, useEffect, useCallback } from 'react';

export const useFavorites = () => {
    const [favorites, setFavorites] = useState(() => {
        try {
            const storedFavorites = window.localStorage.getItem('favoritePokemon');
            return storedFavorites ? JSON.parse(storedFavorites) : [];
        } catch (error) {
            console.error('Failed to parse favorites from localStorage', error);
            return [];
        }
    });

    useEffect(() => {
        try {
            window.localStorage.setItem('favoritePokemon', JSON.stringify(favorites));
        } catch (error) {
            console.error('Failed to save favorites to localStorage', error);
        }
    }, [favorites]);

    const toggleFavorite = useCallback((id) => {
        setFavorites(prevFavorites => {
            if (prevFavorites.includes(id)) {
                return prevFavorites.filter(favId => favId !== id);
            } else {
                return [...prevFavorites, id];
            }
        });
    }, []);

    const isFavorite = useCallback((id) => {
        return favorites.includes(id);
    }, [favorites]);

    return { favorites, toggleFavorite, isFavorite };
};
