import { Container, ImageList } from '@mui/material'
import { getMovies } from '../../lib/api/api';
import ImageItem from '../../components/Search/ImageItem';

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
                    result => (<ImageItem result={result} />)
                )}
            </ImageList>
        </Container>
    )
}

export const getServerSideProps = async (context) => ({
    props: {
        response: context.query.q && context.query.q.length > 3 ? await getMovies(context.query.q) : []
    }
})

