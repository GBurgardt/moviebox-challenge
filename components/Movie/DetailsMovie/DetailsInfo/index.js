import { Box } from '@mui/material';
import ItemInfo from './ItemInfo';

export default function DetailsInfo({ movie }) {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
            }}
        >
            <ItemInfo title='Cast' subtitle={movie.Actors} />
            <ItemInfo title='Genre' subtitle={movie.Genre} />
            <ItemInfo title='Director' subtitle={movie.Director} />
            <ItemInfo title='Writers' subtitle={movie.Writer} />
        </Box>
    )
}


