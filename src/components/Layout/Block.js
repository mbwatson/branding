import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Paper } from '@material-ui/core'

const styles = (theme) => ({
    block: {
        padding: 4 * theme.spacing.unit,
        marginBottom: 4 * theme.spacing.unit,
        transition: 'padding 250ms',
        [theme.breakpoints.up('md')]: {
            padding: 6 * theme.spacing.unit,
        },
    },
})

const block = (props) => {
    const { classes } = props
    return (
        <Paper className={ classes.block } elevation={ 1 }>
            { props.children }
        </Paper>
    )
}

export default withStyles(styles)(block)