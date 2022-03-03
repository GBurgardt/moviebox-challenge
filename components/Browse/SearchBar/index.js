import { Box, Container } from '@mui/material';
import TextField from '@mui/material/TextField';

import SearchIcon from '@mui/icons-material/Search';
import { useRouter } from 'next/router';
import { debounce } from '../../../lib/utils';

export default function SearchBar() {
    const router = useRouter();

    const onChange = debounce((e) => {
        const query = e.target.value;
        if (query === '') {
            router.push('/browse');
        } else {
            router.push(`/search?q=${query}`);
        }

        e.preventDefault();
    }, 200);

    return (
        <Container
            sx={{
                marginTop: '17px',
                marginLeft: 'auto',
                padding: '0px !important',
                marginBottom: '52px'
            }}
        >
            <TextField
                sx={{
                    width: '100%',
                    height: '46px',
                    background: '#FFFFFF',
                    borderRadius: '5px',
                    padding: '0px'
                }}
                id="search-bar"
                placeholder="Search movies"
                variant="outlined"
                margin="normal"
                fullWidth
                onChange={onChange}
                InputProps={{
                    style: {
                        height: '46px',
                        fontFamily: 'Poppins',
                        fontStyle: 'normal',
                        fontWeight: 'normal',
                        fontSize: '14px',
                        lineHeight: '21px',
                        letterSpacing: '0.2px',
                    },
                    startAdornment: (
                        <Box
                            sx={{
                                marginLeft: '10px',
                                marginRight: '10px',
                                marginTop: '10px',
                                marginBottom: '10px',
                            }}
                        >
                            <SearchIcon 
                                sx={{
                                    margin: '10px 7px 3px 0px !important',
                                    color: '#b5b5b5',
                                    fontSize: '22px',
                                    fontWeight: 'bold',
                                }}
                            />
                        </Box>
                    )
                }}

            />
        </Container>
    )
}




