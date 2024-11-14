const BASE_URL = 'https://swapi.dev/api';

export const fetchCharacters = async (page = 1) => {
    try {
        const response = await fetch(`${BASE_URL}/people/?page=${page}`);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        return await response.json();
    } catch (error) {
        throw new Error(`Failed to fetch characters: ${error.message}`);
    }
};

export const fetchHomeworld = async (url) => {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        return await response.json();
    } catch (error) {
        throw new Error(`Failed to fetch homeworld: ${error.message}`);
    }
};