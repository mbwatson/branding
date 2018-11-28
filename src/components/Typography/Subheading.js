import React from 'react';
import { Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';

const styles = ( theme ) => ({
    root: {
        marginBottom: 2 * theme.spacing.unit,
        color: theme.palette.grey[800],
    }
})

const subheading = ( props ) => {
    const { classes } = props
    return (
        <Typography variant="h5" className={ [classes.root, props.className].join(' ') }>
            { props.children }
        </Typography>
    )
}

export default withStyles(styles)(subheading)
