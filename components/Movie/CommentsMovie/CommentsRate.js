import { Box, Typography } from '@mui/material';
import starIcon from '../../../assets/icons/star.png';
import fullStarIcon from '../../../assets/icons/full-star.png';
import Image from 'next/image';


export default function CommentsRate({ }) {
    const emptyStartElement = (
        <Box sx={{ marginRight: '10px', cursor: 'pointer' }}>
            <Image src={starIcon} width={'25px'} height={'25px'} />
        </Box>
    );

    const fullStarElement = (
        <Box sx={{ marginRight: '10px', cursor: 'pointer' }}>
            <Image src={fullStarIcon} width={'25px'} height={'25px'} />
        </Box>
    );

    return (
        <Box sx={{ display: 'flex', marginTop: '33px' }}>
            <Typography
                sx={{
                    fontFamily: 'Poppins',
                    fontStyle: 'normal',
                    fontWeight: '600',
                    fontSize: '18px',
                    lineHeight: '27px',
                    color: '#7A8C99',
                    marginRight: '12px',
                }} 
            >
                Rate:
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row'}}>
                { fullStarElement }
                { fullStarElement }
                { fullStarElement }
                { emptyStartElement }
                { emptyStartElement }
            </Box>
        </Box>
    )
}


