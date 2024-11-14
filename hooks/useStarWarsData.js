import { useState, useEffect, useCallback } from 'react';

export const useStarWarsData = () => {
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);

    const fetchHomeworld = async (url) => {
        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error('Failed to fetch homeworld');
            const data = await response.json();
            return data.name;
        } catch (error) {
            console.error('Error fetching homeworld:', error);
            return 'Unknown';
        }
    };

    const fetchCharacters = useCallback(async () => {
        try {
            setLoading(true);
            const response = await fetch(`https://swapi.dev/api/people/?page=${page}`);

            if (!response.ok) {
                throw new Error('Failed to fetch characters');
            }

            const data = await response.json();

            // Fetch homeworld for each character
            const charactersWithHomeworld = await Promise.all(
                data.results.map(async (character) => {
                    const homeworldName = await fetchHomeworld(character.homeworld);
                    return { ...character, homeworldName };
                })
            );

            setCharacters(prev =>
                page === 1
                    ? charactersWithHomeworld
                    : [...prev, ...charactersWithHomeworld]
            );

            // Check if there are more pages
            setHasMore(data.next !== null);
            setError(null);
        } catch (err) {
            setError('Failed to load characters. Please try again later.');
        } finally {
            setLoading(false);
        }
    }, [page]);

    useEffect(() => {
        fetchCharacters();
    }, [fetchCharacters]);

    const loadMore = useCallback(() => {
        if (!loading && hasMore) {
            setPage(prev => prev + 1);
        }
    }, [loading, hasMore]);

    return {
        characters,
        loading,
        error,
        hasMore,
        loadMore
    };
};

export default useStarWarsData;