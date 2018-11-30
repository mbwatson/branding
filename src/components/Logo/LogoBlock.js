import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Card, CardContent } from '@material-ui/core'
import InfoBlock from '../Typography/InfoBlock'

const styles = (theme) => ({
    card: {
        padding: 0,
        [theme.breakpoints.up('sm')]: {
            margin: 2 * theme.spacing.unit,
        },
    },
    topper: {
        borderBottom: `1px solid ${ theme.palette.grey[200] }`,
    },
    image: {
        width: '100%',
    },
    content: {
        backgroundColor: theme.palette.common.white,
    },
})


// const filenameFromPath = (path) => {
//     const imagePathRegex = /^[\/\w]+\/(.+)\..+(\.\w+)/
//     const match = path.match(imagePathRegex)
//     return (match && match.length > 0) ? match.slice(1,3).join() : path
// }

const logoBlock = (props) => {
    const { classes } = props
    return (
        <Card className={ classes.card }>
            <CardContent className={ classes.topper } style={{ backgroundColor: props.bgColor }}>
                <img src={ props.logo } alt="Logo" className={ classes.image }/>
            </CardContent>
            <CardContent className={ classes.content }>
                <InfoBlock
                    title="Image"
                    body={ props.logo }
                    className={ classes.info }/>                
            </CardContent>
        </Card>
    )
}

export default withStyles(styles)(logoBlock)
