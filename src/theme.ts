import { createTheme } from '@mui/material/styles';

const theme = createTheme ({
    palette: {
        primary: {
            main:'#1976d2',
        },
        secondary: {
            main: '#000897b',
        },
        background: {
            default: '#f7f9fc',
        },
        
    },

    typography: {
        fontFamily: 'Inter, Arial, sans-serif',

        h4: {
            fontWeight:700,
        },

        h6: {
            fontWeight:600,
        },
    },

    shape: {
        borderRadius: 12,
    },
});

export default theme;