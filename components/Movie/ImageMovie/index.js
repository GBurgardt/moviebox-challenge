import { Container, Typography, Box } from '@mui/material';
import leftArrow from '../../../assets/icons/left-arrow.png';
import Image from 'next/image';
import { useRouter } from 'next/router';


export default function ImageMovie({ movie }) {
    const router = useRouter();

    const onClickBack = () => router.back()

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                width: '54%',
                paddingRight: '22px',
            }}
        >
            <Box 
                sx={{

                    cursor: 'pointer'
                }}

                onClick={onClickBack}
            >
                <Image
                    src={leftArrow}
                    alt="Left Arrow"
                    sx={{
                        width: 'auto'
                    }}
                />
            </Box>

            <Box
                sx={{
                    marginTop: '20px'
                }}
            >
                <img
                    src={movie.Poster}
                    style={{
                        width: '100%',
                        borderRadius: '7px'
                    }}
                    alt="Movie Poster" />
            </Box>
        </Box>
    )
}