const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export const minutesToHours = (time) => {
    const minutes = time?.match(/\d+/)[0];
    const hours = Math.floor(minutes / 60);
    const minutesLeft = minutes % 60;
    return `${hours}h ${minutesLeft}m`;
}

export const cutString = (string, length) => {
    return string?.length > length ? string.substring(0, length) + '...' : string;
}

// return date in format like: '22 October 2021'
export const formatDate = (date) => {
    const auxDate = new Date(date);
    const day = auxDate.getDate() + 1;
    const month = months[auxDate.getMonth()];
    const year = auxDate.getFullYear();
    return `${day} ${month} ${year}`;
}

export const debounce = (func, wait, immediate) => {
    let timeout;
    return function () {
        const context = this, args = arguments;
        const later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};


export const getParsedRating = (ratings) => {
    return ratings.map(r => {
        if (r.Source === 'Internet Movie Database') {
            const val = r.Value.substring(
                0,
                r.Value.indexOf('/')
            );

            return Number(val) * 10;
        }
        if (r.Source === 'Rotten Tomatoes') {
            const val = r.Value.substring(
                0,
                r.Value.indexOf('%')
            );

            return Number(val);
        }
        if (r.Source === 'Metacritic') {
            const val = r.Value.substring(
                0,
                r.Value.indexOf('/')
            );

            return Number(val);
        }
    })
}

export const getParsedRatingAverage = (parsedRating) => {
    const sum = parsedRating.reduce(
        (partialSum, a) => partialSum + a, 0
    );
    return sum / parsedRating.length;
}