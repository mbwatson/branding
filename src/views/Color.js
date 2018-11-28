import React from 'react'
import { withStyles } from '@material-ui/core/styles'

import Title from '../components/Typography/Title'
import Heading from '../components/Typography/Heading'
import Paragraph from '../components/Typography/Paragraph'
import ColorSection from '../components/Color/ColorSection'

import { renciColors } from '../themes/Renci'

const styles = (theme) => ({
    root: {
    },
    colorGrid: {
        display: 'flex',
        justifyContent: 'flex-start',
        width: '100%',
    },
    colorBlock: {
        flexGrow: 1,
        width: '100%',
    },
})

const colors = (props) => {
    const { classes } = props
    return (
        <div className={ classes.root }>
            <Title>Color</Title>
            
            <Paragraph>
                Color is...
            </Paragraph>
            
            <Heading>Primary Palette</Heading>
            <Paragraph>
                The primary palette...
            </Paragraph>            
            <ColorSection colors={ renciColors.primary }/>

            <Heading>Secondary Palette</Heading>
            <Paragraph>
                The secondary palette...
            </Paragraph>
            <ColorSection colors={ renciColors.secondary }/>
            
            <Heading>Extended Palette</Heading>
            <Paragraph>
                The extended palette...
            </Paragraph>            
            <ColorSection colors={ renciColors.extended }/>
        </div>
    )
}

export default withStyles(styles)(colors)