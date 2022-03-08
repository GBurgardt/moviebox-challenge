import { Container, ImageList } from '@mui/material'
import { getMovies, getMovie } from '../../lib/api/api';
import ImageItem from '../../components/Search/ImageItem';
import { getParsedRating, getParsedRatingAverage } from '../../lib/utils/utils';

export default function Search({ response }) {
    const results = response.results || [];

    return (
        <Container>
            <ImageList
                sx={{
                    margin: 'auto',
                    padding: 'auto',
                    width: '100%',
                }}
                cols={4}
            >
                {results.map(
                    (result) => (<ImageItem key={result.imdbID} result={result} />)
                )}
            </ImageList>
        </Container>
    )
}

export const getServerSideProps = async (context) => {

    const movies = await getMovies(context.query.q);

    const detailsMoviesPromises = movies.results.map(
        m => getMovie(m.imdbID)
    );

    const detailsMovies = await Promise.all(detailsMoviesPromises);

    const results = detailsMovies
        .map(d => d.results)
        .sort((a, b) => {
            const ratingsA = getParsedRating(a.Ratings);
            const ratingsB = getParsedRating(b.Ratings);

            const averageA = getParsedRatingAverage(ratingsA);
            const averageB = getParsedRatingAverage(ratingsB);

            return averageB - averageA;
        });

    return {
        props: {
            response: context.query.q && context.query.q.length > 3 ? { results } : []
        }
    }
}

