import React from 'react';
import { Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';

const styles = ( theme ) => ({
    root: {
        marginBottom: 4 * theme.spacing.unit,
        color: theme.palette.primary.main,
        textAlign: 'left',
        transition: 'margin 250ms',
        [theme.breakpoints.up('sm')]: {
            marginTop: 2 * theme.spacing.unit,
        },
    }
})

const title = ( props ) => {
    const { classes } = props
    return (
        <Typography variant="h1" className={ [classes.root, props.className].join(' ') }>
            { props.children }
        </Typography>
    )
}

export default withStyles(styles)(title)
