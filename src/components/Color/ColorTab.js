import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Card, CardContent } from '@material-ui/core'
import Info from '../Typography/Info'

const hexToRgb = (hex) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null
}

const styles = (theme) => ({
    card: {
        margin: 2 * theme.spacing.unit,
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
    },
    color: {
        flex: 1,
        minWidth: '100px',
    },
    content: {
        flex: 3,
        display: 'flex',
        justifyContent: 'flex-start',
        backgroundColor: theme.palette.grey[100],
        flexDirection: 'column',
        [theme.breakpoints.up('md')]: {
            flexDirection: 'row',
            flex: 5,
            width: '100%',
        }
    },
    info: {
        flex: 1,
        flexBasis: '33%',
    },
})

const colorBlock = (props) => {
    const { classes, colorName, colorHex } = props
    const { r, g, b } = hexToRgb(colorHex)
    const colorRgb = [r, g, b].join(', ')
    return (
        <Card className={ classes.card }>
            <CardContent
                className={ classes.color }
                title={ colorHex }
                style={{ backgroundColor: colorHex }}
            />
            <CardContent className={ classes.content }>
                <Info title="Name" body={ colorName } className={ classes.info }/>
                <Info title="Hex" body={ colorHex } className={ classes.info }/>
                <Info title="RGB" body={ colorRgb } className={ classes.info }/>
            </CardContent>
        </Card>
    )
}

export default withStyles(styles)(colorBlock)
