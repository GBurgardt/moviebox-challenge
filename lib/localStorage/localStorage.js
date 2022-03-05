export const setLocalStorage = (key, value) => {
    localStorage.setItem(key, value);
}

export const getLocalStorage = (key) => {
    return localStorage.getItem(key);
}

export const setCommentsByMovie = (movieId, comments) => {
    setLocalStorage(`${movieId}-comments`, JSON.stringify(comments));
}

export const getCommentsByMovie = (movieId) => {
    return JSON.parse(getLocalStorage(`${movieId}-comments`)) || [];
}

export const setFavoriteMovie = (movieId, favorite) => {
    setLocalStorage(`${movieId}-favorite`, favorite);
}

export const getFavoriteMovie = (movieId) => {
    return getLocalStorage(`${movieId}-favorite`);
}

