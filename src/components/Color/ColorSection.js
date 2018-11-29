import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'
import ColorTab from './ColorTab'

const styles = (theme) => ({
    colorGrid: {
        marginBottom: 4 * theme.spacing.unit,
        display: 'flex',
        justifyContent: 'flex-start',
        width: '100%',
    },
    colorTab: {
        flexGrow: 1,
        width: '100%',
    },
})

const colorSection = (props) => {
    const { classes, colors } = props
    return (
        <Grid container className={ classes.colorGrid }>
            {
                Object.keys(colors).map(function(key) {
                    return (
                        <Grid item xs={12} className={ classes.colorTab } key={ colors[key].name }>
                            <ColorTab colorName={ colors[key].name } colorHex={ colors[key].hex }/>
                        </Grid>
                    )
                })
            }
        </Grid>
    )
}

export default withStyles(styles)(colorSection)
