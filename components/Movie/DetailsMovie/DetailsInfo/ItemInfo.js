import { Typography, Box } from '@mui/material';

export default function ItemInfo({ title, subtitle }) {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                width: '25%',
                marginRight: '27px',
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
                {title}
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
                {subtitle}
            </Typography>
        </Box>
    )
}


