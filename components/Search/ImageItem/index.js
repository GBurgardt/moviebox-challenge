import { ImageListItem } from '@mui/material';
import React from 'react';
import HeartIconFav from '../HeartIconFav';
import { useRouter } from 'next/router'
import { getFavoriteMovie, setFavoriteMovie } from '../../../lib/localStorage/localStorage';

export default function ImageItem({ result }) {
    const router = useRouter();

    const [favorite, setFavorite] = React.useState(false);

    React.useEffect(() => {
        const storedFavorite = getFavoriteMovie(result.imdbID);
        if (storedFavorite) {
            setFavorite(JSON.parse(storedFavorite));
        }
    }, []);

    const toggleFavorite = (e) => {
        e.stopPropagation();
        setFavorite(!favorite);
        setFavoriteMovie(result.imdbID, !favorite);
    }

    const onClickMovie = () => {
        router.push(`/movie/${result.imdbID}`);
    }

    return (
        <ImageListItem
            key={result.imdbID}
            sx={{
                width: '87%',
                margin: '10px',
                cursor: 'pointer',
            }}
            onClick={onClickMovie}
        >
            <img
                src={result.Poster}
                alt={result.Title}
                loading="lazy"
                style={{
                    borderRadius: '4px'
                }}
            />

            <HeartIconFav
                toggleFavorite={toggleFavorite}
                favorite={favorite}
            />
        </ImageListItem>
    )
}




