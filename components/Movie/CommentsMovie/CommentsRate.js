import { Box, Typography } from '@mui/material';
import starIcon from '../../../assets/icons/star.png';
import fullStarIcon from '../../../assets/icons/full-star.png';
import Image from 'next/image';


export default function CommentsRate({ rate, updateRate }) {

    const onClickStar = (star) => {
        updateRate(star);
    }

    const starStyle = {
        marginRight: '10px', 
        cursor: 'pointer',
        '&:hover': {
            boxShadow: '0px 0px 10px #000000',
            borderRadius: '50%',
            opacity: '0.7'
        }
    }

    const emptyStartElement = (star) => (
        <Box onClick={() => onClickStar(star)} sx={starStyle}>
            <Image src={starIcon} width={'25px'} height={'25px'} />
        </Box>
    );

    const fullStarElement = (rate) => (
        <Box onClick={onClickStar} sx={starStyle}>
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
                { rate >= 1 ? fullStarElement(1) : emptyStartElement(1) }
                { rate >= 2 ? fullStarElement(2) : emptyStartElement(2) }
                { rate >= 3 ? fullStarElement(3) : emptyStartElement(3) }
                { rate >= 4 ? fullStarElement(4) : emptyStartElement(4) }
                { rate >= 5 ? fullStarElement(5) : emptyStartElement(5) }
            </Box>
        </Box>
    )
}


