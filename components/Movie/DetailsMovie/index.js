import { Container } from '@mui/material';
import DetailsInfo from './DetailsInfo';
import OverviewMovie from './DetailsOverview';
import DetailsTitle from './DetailsTitle';

export default function DetailMovie({ movie }) {
    return (
        <Container
            sx={{
                display: 'flex',
                flexDirection: 'column',
                marginTop: '20px',
                paddingLeft: '16px !important',
            }}
        >
            <DetailsTitle movie={movie} />
            <OverviewMovie movie={movie} />
            <DetailsInfo movie={movie} />
        </Container>
    )
}