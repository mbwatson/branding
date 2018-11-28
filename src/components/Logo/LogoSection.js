import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'
import LogoBlock from './LogoBlock'

const styles = (theme) => ({
    logoGrid: {
        marginBottom: 4 * theme.spacing.unit,
        display: 'flex',
        justifyContent: 'flex-start',
        width: '100%',
    },
    logoBlock: {
        flexGrow: 1,
        width: '100%',
    },
})

const logoSection = (props) => {
    const { classes, logos } = props
    return (
        <Grid container className={ classes.logoGrid }>
            {
                logos.map( (logo) => {
                    return <Grid item xs={12} md={ 6 } lg={4} className={ classes.logoBlock } key={ logo.image }>
                        <LogoBlock logo={ logo.image } bgColor={ logo.bgColor }/>
                    </Grid>
                })
            }
        </Grid>
    )
}

export default withStyles(styles)(logoSection)
