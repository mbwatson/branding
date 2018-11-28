import React from 'react';
import { Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';
import { copyText } from '../../utils/CopyToClipboard'

const styles = ( theme ) => ({
    root: { },
    title: {
        color: theme.palette.grey[600],
        textTransform: 'uppercase',
    },
    body: {
        fontSize: theme.typography.htmlFontSize,
        color: theme.palette.grey[900],
        marginBottom: theme.spacing.unit,
    }
})

const info = ( props ) => {
    const { classes } = props
    return (
        <div className={ classes.root }>
            <Typography variant="body1" className={ classes.title }>
                { props.title }
            </Typography>
            <Typography variant="body2" className={ classes.body }
                style={{ cursor: 'pointer', }}
                onClick={ copyText }
            >
                { props.body }
            </Typography>
        </div>
    )
}

export default withStyles(styles)(info)
