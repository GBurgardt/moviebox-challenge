import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';

import Box from '@mui/material/Box';
import Image from 'next/image';

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import tvLogo from '../../../assets/icons/tv.png';

export default function PageTitle({ title }) {
    return (
        <Container 
            component="main" 
            sx={{
                width: '59.2vw',
                margin: '0px',
                padding: '0px !important'
            }}
            >
            <CssBaseline />
            <Box
                sx={{
                    marginTop: 8.5,
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                }}
            >
                <Image
                    src={tvLogo}
                    alt="Tv Logo"
                />

                <Typography 
                    sx={{
                        fontWeight: 'bold',
                        fontSize: '24px',
                        lineHeight: '24px',
                        marginLeft: '27px',
                        marginTop: '2px',
                        color: '#FFFFFF',
                        fontFamily: 'Poppins'
                    }}
                    component="h1" 
                    variant="h5">
                    {title}
                </Typography>
            </Box>
        </Container>
    )
}
