import React from 'react'
import classnames from 'classnames'
import { withStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

const styles = ( theme ) => ({
    paragraph: {
        color: theme.palette.grey[700],
        marginBottom: 2 * theme.spacing.unit,
        [theme.breakpoints.up('sm')]: {
            margin: `${4 * theme.spacing.unit}px ${2 * theme.spacing.unit}px`,
        },
    }
})

const paragraph = ( props ) => {
    const { classes } = props
    return (
        <Typography paragraph className={ classnames(classes.paragraph, props.className) }>
            { props.children }
        </Typography>
    )
}

export default withStyles(styles)(paragraph)
