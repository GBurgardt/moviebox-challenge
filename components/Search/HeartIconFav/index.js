import { Box } from '@mui/material';
import HeartIcon from '@mui/icons-material/Favorite';
import HeartBorderIcon from '@mui/icons-material/FavoriteBorder';
import React from 'react';

export default function HeartIconFav({ toggleFavorite, favorite }) {

    return (
        <Box
            sx={{
                position: 'absolute',
                bottom: '0px',
                left: '0px',
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-end',
            }}
        >
            <Box
                onClick={toggleFavorite}
                sx={{
                    background: 'rgba(243, 244, 246, 0.5)',
                    backdropFilter: 'blur(2px)',
                    borderRadius: '25px',
                    margin: '15.5px',
                    width: '30px',
                    height: '30px',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease-in-out',
                    '&:hover': {
                        background: 'rgba(243, 244, 246, 0.8)',
                    },
                    '&:active': {
                        background: 'rgba(243, 244, 246, 0.8)',
                    }
                }}
            >
                {
                    favorite ? <HeartIcon
                        sx={{
                            color: '#FFFFFF',
                            fontSize: '18px',
                            marginTop: '1px',
                        }}
                    /> : <HeartBorderIcon
                        sx={{
                            color: '#FFFFFF',
                            fontSize: '18px',
                            marginTop: '1px',
                        }}
                    />

                }
            </Box>
        </Box>
    )
}






