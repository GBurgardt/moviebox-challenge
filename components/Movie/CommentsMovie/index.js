import { Typography, Box, Snackbar, Alert } from '@mui/material';
import { useEffect, useState } from 'react';
import { getCommentsByMovie, setCommentsByMovie } from '../../../lib/localStorage/localStorage';
import CommentsInput from './CommentsInput';
import CommentsList from './CommentsList';
import CommentsRate from './CommentsRate';

export default function CommentsMovie({ movie }) {
    const [rate, setRate] = useState(0);
    const [comments, setComments] = useState([]);
    const [msgAlertSuccessOpen, setMsgAlertSuccessOpen] = useState(false);
    const [msgAlertErrorOpen, setMsgAlertErrorOpen] = useState(false);

    useEffect(() => {
        const comments = getCommentsByMovie(movie.imdbID);
        setComments(comments);
    }, []);

    const onClickPostComment = (comment) => {
        if (comment.message && comment.name) {

            const commentWithRate = { ...comment, rate };

            const comments = getCommentsByMovie(movie.imdbID);

            const newComments = [...comments, commentWithRate];

            console.log("newComments")
            console.log(newComments)

            setCommentsByMovie(movie.imdbID, newComments);
            setComments(newComments);
            setMsgAlertSuccessOpen(true);
        } else {
            setMsgAlertErrorOpen(true);
        }
    }
    
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                marginTop: '72px',
                marginLeft: '2px'
            }}
        >
            <Box>
                <Typography
                    variant="h4"
                    sx={{
                        fontFamily: 'Poppins',
                        fontStyle: 'normal',
                        fontWeight: '600',
                        fontSize: '30px',
                        lineHeight: '45px',
                        color: '#ffffff',
                    }}
                >
                    Commentary
                </Typography>
            </Box>

            <CommentsRate rate={rate} updateRate={setRate} />
            <CommentsInput onClickPostComment={onClickPostComment} />
            <CommentsList comments={comments} />

            <Snackbar 
                open={msgAlertSuccessOpen}
                autoHideDuration={6000} 
                onClose={() => setMsgAlertSuccessOpen(false)}>
                <Alert onClose={() => setMsgAlertSuccessOpen(false)} severity="success" sx={{ width: '100%' }}>
                Comentario agregado con éxito
                </Alert>
            </Snackbar>

            <Snackbar
                open={msgAlertErrorOpen}
                autoHideDuration={6000}
                onClose={() => setMsgAlertErrorOpen(false)}>
                <Alert onClose={() => setMsgAlertErrorOpen(false)} severity="error" sx={{ width: '100%' }}>
                Debe completar todos los campos
                </Alert>
            </Snackbar>


        </Box>
    )
}