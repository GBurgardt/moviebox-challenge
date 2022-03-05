import { Typography, Box } from '@mui/material';
import Image from 'next/image';
import { minutesToHours, cutString } from '../../../lib/utils/utils';
import imdbIcon from '../../../assets/icons/imdb-icon.png';

export default function DetailsTitle({ movie }) {

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                marginBottom: '20px',
            }}
        >
            <Typography
                sx={{
                    fontFamily: 'Poppins',
                    fontStyle: 'normal',
                    fontWeight: 'bold',
                    fontSize: '67px',
                    lineHeight: '100px',
                    color: '#FFFFFF',
                    height: '87px',
                }}
                component="h1"
                variant="h5"
            >
                {cutString(movie.Title, 12)}
            </Typography>

            <Typography
                sx={{
                    fontFamily: 'Poppins',
                    fontStyle: 'normal',
                    fontWeight: '500',
                    fontSize: '14px',
                    lineHeight: '23px',
                    color: '#7A8C99',
                }}
            >
                Original title: {movie.Title}
            </Typography>

            <Typography
                sx={{
                    fontFamily: 'Poppins',
                    fontStyle: 'normal',
                    fontWeight: '500',
                    fontSize: '14px',
                    lineHeight: '23px',
                    color: '#7A8C99',
                }}
            >
                {minutesToHours(movie.Runtime)} - {movie.Year} - {movie.Rated}
            </Typography>

            <Box
                sx={{
                    display: 'flex',
                    marginTop: '20px'
                }}
            >
                <Image
                    src={imdbIcon}
                    alt="imdb"
                />
                <Typography
                    sx={{
                        fontFamily: 'Poppins',
                        fontStyle: 'normal',
                        fontWeight: '500',
                        fontSize: '24px',
                        lineHeight: '36px',
                        color: '#FFFFFF',
                        marginLeft: '15px',
                    }}
                >
                    {movie.imdbRating}
                </Typography>
                <Typography
                    sx={{
                        fontFamily: 'Poppins',
                        fontStyle: 'normal',
                        fontWeight: '400',
                        fontSize: '15px',
                        lineHeight: '24px',
                        color: '#FFFFFF',
                        marginTop: '8px',
                    }}
                >
                    /10
                </Typography>
            </Box>

        </Box>
    )
}
