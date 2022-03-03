import { Box, Typography } from '@mui/material';

import { formatDate } from '../../../lib/utils';

export default function CommentItem({ comment }) {
    return (
        <Box sx={{ marginTop: '26px'}}>
            <Typography sx={{
                fontFamily: 'Poppins',
                fontStyle: 'normal',
                fontWeight: '600',
                fontSize: '18px',
                lineHeight: '27px',
                color: '#7A8C99'
            }}>
                {comment.name} - {formatDate(comment.date)}
            </Typography>

            <Typography sx={{
                marginTop: '7px',
                fontFamily: 'Poppins',
                fontStyle: 'normal',
                fontWeight: 'normal',
                fontSize: '16px',
                lineHeight: '24px',
                color: '#FFFFFF'
            }}>
                {comment.message}
            </Typography>
        </Box>
    )
}