import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    // mixins
    mixins: {
        container: {
            width: '100%',
            maxWidth: '900px',
            margin: '0 auto',
        },

        debug: {
            border: '1px solid #fcc',
            '& *': {
                border: '1px solid #fcc',
            }
        }
    },
    // colors
    palette: {
        primary: {
            main: '#333333',
        },
        secondary: {
            main: '#336699',
        },
        tertiary: {
            black: '#262626',
            slate:'#666666',
            silver: '#b5b5b5',
            rhino: '#b5b5b5',
            sand: '#ebf0cc',
        }
    },
    // text
    typography: {
        useNextVariants: true,
        htmlFontSize: 18,
        h1: {
            fontFamily: 'Roboto',
            fontSize: '32pt',
        },
        h2: {
            fontFamily: 'Roboto',
            fontSize: '28pt',
        },
        h3: {
            fontFamily: 'Roboto',
            fontSize: '24pt',
        },
        h4: {
            fontFamily: 'Roboto',
            fontSize: '20pt',
        },
        h5: {
            fontFamily: 'Roboto',
            fontSize: '16pt',
        },
        headline: {
            fontFamily: 'Roboto',
            fontSize: '16pt',
        },
        body1: {
            fontFamily: 'Open Sans',
            fontSize: '8pt',
            lineHeight: '1.5rem',
        },
        body2: {
            fontFamily: 'Open Sans',
            fontSize: '10pt',
            lineHeight: '1.5rem',
        }, // paragraph gets this by defa
    },
    shape: {
        borderRadius: '4px',
    },
    spacing: {
        unit: 8,
    },
    fade: (attribute, ms = 250) => `${ attribute } ${ ms }ms`,
})

export default theme