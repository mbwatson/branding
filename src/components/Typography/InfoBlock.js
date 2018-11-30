import React from 'react';
import classnames from 'classnames'
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core'
import { FileCopy as CopyIcon } from '@material-ui/icons'
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
    },
    copyableBody: {
        position: 'relative',
        transition: theme.fade('color'),
        '&:hover': {
            color: theme.palette.secondary.main,
        },
        '&:hover $copyText': {
            opacity: 0.5,
        },
    },
    copyText: {
        color: theme.palette.secondary.main,
        textTransform: 'uppercase',
        position: 'absolute',
        bottom: 0,
        transform: 'translateY(-50%)',
        marginLeft: theme.spacing.unit,
        opacity: 0,
        transition: theme.fade('opacity'),
        fontSize: '95%',
    },
})

const infoBlock = ( props ) => {
    const { classes, copyable } = props
    return (
        <div className={ classnames(classes.root, props.className) }>
            <Typography variant="body1" className={ classes.title }>
                { props.title }
            </Typography>
            <Typography variant="body2" className={ classnames(classes.body, copyable ? classes.copyableBody : null) }
                style={{ cursor: copyable ? 'pointer' : 'auto' }}
                onClick={ copyable ? copyText : null }
            >
                { props.body }
                {
                    copyable
                    ? <CopyIcon fontSize="small" className={ classes.copyText }/>
                    : null
                }
            </Typography>
        </div>
    )
}

export default withStyles(styles)(infoBlock)
