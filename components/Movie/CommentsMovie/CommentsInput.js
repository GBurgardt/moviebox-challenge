import { Box, TextareaAutosize, Button, Input } from '@mui/material';
import { useState } from 'react';
import { getCommentsByMovie, setCommentsByMovie } from '../../../lib/localStorage/localStorage';


export default function CommentsInput({ onClickPostComment }) {

    const [comment, setComment] = useState({ name: '', message: '' });
    
    return (
        <Box sx={{ marginTop: '14px'}}>
            
            <Input  
                placeholder="Your name"
                style={{
                    borderRadius: '5px',
                    padding: '17px',
                    fontFamily: 'Poppins',
                    fontStyle: 'normal',
                    fontWeight: 'normal',
                    fontSize: '14px',
                    lineHeight: '21px',
                    color: '#000',
                    backgroundColor: '#FFFFFF',
                    padding: '10px 17px',
                    marginBottom: '10px',
                    color: '#8E8E8E'
                }}
                value={comment.name}
                onChange={(e) => setComment({ ...comment, name: e.target.value })}
            />
            <TextareaAutosize
                aria-label="empty comment"
                placeholder="Add your comments here"
                minRows={4}
                style={{ 
                    width: '100%', 
                    height: '100%', 
                    borderRadius: '5px',
                    padding: '17px',
                    fontFamily: 'Poppins',
                    fontStyle: 'normal',
                    fontWeight: 'normal',
                    fontSize: '14px',
                    lineHeight: '21px',
                    color: '#8E8E8E'
                }}
                value={comment.message}
                onChange={(e) => setComment({ ...comment, message: e.target.value })}
            />

            <Box sx={{ 
                marginTop: '14px', 
                display: 'flex', 
                justifyContent: 'flex-end',
            }}>
                <Button 
                    type="submit" 
                    variant="contained" 
                    color="tertiary"
                    sx={{
                        fontSize: '12px',
                        padding: '11px 44px',
                        color: '#FFFFFF',
                    }}
                    onClick={(e) => {
                        const newComment = { ...comment, date: new Date().toISOString() };

                        onClickPostComment(newComment);
                        setComment({ name: '', message: '' });
                    }}
                    >
                    Post
                </Button>
            </Box>
        </Box>
    )
}