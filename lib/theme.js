import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    status: {
        danger: '#e53e3e',
    },
    palette: {
        background: {
            default: '#202020',
        },
        primary: {
            main: '#FF9F1C',
            darker: '#053e85',
        },
        secondary: {
            main: '#FF4040',
            darker: '#053e85',
        },
        tertiary: {
            main: '#2EC4B6',
            darker: '#053e85',
        },
        grey: {
            main: '#0A1014',
            grey: '#1B2329'
        },
        neutral: {
            main: '#64748B',
            contrastText: '#fff',
        },
    },
});