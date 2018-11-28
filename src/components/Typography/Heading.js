import React from 'react';
import { Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';

const styles = ( theme ) => ({
    root: {
        marginBottom: 2 * theme.spacing.unit,
        color: theme.palette.primary.main,
        transition: 'margin 250ms',
    }
})

const heading = ( props ) => {
    const { classes } = props
    return (
        <Typography variant="h4" className={ [classes.root, props.className].join(' ') }>
            { props.children }
        </Typography>
    )
}

export default withStyles(styles)(heading)
