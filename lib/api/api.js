const baseUrl = process.env.NEXT_PUBLIC_OMDB_URL;
const apikey = process.env.NEXT_PUBLIC_OMDB_API_KEY;

export const getMovies = async (query) => {
    const url = `${baseUrl}/?s=${query}&apikey=${apikey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        
        return {
            results: data.Search || [],
            message: data.Error || 'Ok'
        }
    } catch (error) {
        return {
            results: [],
            message: error.Error
        }
    }
};

export const getMovie = async (id) => {
    const url = `${baseUrl}/?i=${id}&apikey=${apikey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        
        return {
            results: data || [],
            message: data.Error || 'Ok'
        }
    } catch (error) {
        return {
            results: [],
            message: error.Error
        }
    }
};

