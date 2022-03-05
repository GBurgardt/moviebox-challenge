import { Container } from '@mui/material';
import { getMovie } from '../../../lib/api/api';
import ImageMovie from '../../../components/Movie/ImageMovie';
import DetailMovie from '../../../components/Movie/DetailsMovie';
import CommentsMovie from '../../../components/Movie/CommentsMovie';

export default function MovieDetail({ movie }) {
    return (
        <Container component="main">
            <Container
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    marginTop: '142px',
                    padding: '0px !important'
                }}
            >
                <ImageMovie movie={movie} />
                <DetailMovie movie={movie} />

            </Container>
            <CommentsMovie movie={movie} />
        </Container>

    )
}

export const getServerSideProps = async (context) => {
    const { id } = context.query;
    const movieResp = await getMovie(id);

    return {
        props: { movie: movieResp.results }
    }

}