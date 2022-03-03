import { Box, Typography } from '@mui/material';
import CommentItem from './CommentItem';

export default function CommentsList({ comments }) {
   
    console.log("comments")
    console.log(comments)
    console.log("fin comments")

    return (
        <Box sx={{ 
            display: 'flex', 
            flexDirection: 'column',
            marginBottom: '36px' 
        }}>
            {
                comments && comments
                    .sort((a, b) => new Date(b.date) - new Date(a.date))
                    .map((comment, index) => (
                        <CommentItem key={index} comment={comment} />
                    ))
            }
        </Box>
    )
}


