import { Typography, Box } from '@mui/material';

export default function OverviewMovie({ movie }) {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                marginBottom: '26px',
            }}
        >
            <Typography
                sx={{
                    fontFamily: 'Poppins',
                    fontStyle: 'normal',
                    fontWeight: '600',
                    fontSize: '18px',
                    lineHeight: '27px',
                    color: '#7A8C99'
                }}
            >
                Overview
            </Typography>
            <Typography
                sx={{
                    fontFamily: 'Poppins',
                    fontStyle: 'normal',
                    fontWeight: 'normal',
                    fontSize: '16px',
                    lineHeight: '24px',
                    color: '#FFFFFF',
                    marginTop: '6px'
                }}
            >
                {movie.Plot}
            </Typography>
        </Box>
    )
}


