import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'

import { List, ListItem } from '@material-ui/core'

import Title from '../components/Typography/Title'
import Heading from '../components/Typography/Heading'
import Subheading from '../components/Typography/Heading'
import Paragraph from '../components/Typography/Paragraph'

import ColorSection from '../components/Color/ColorSection'

import { irodsColors } from '../themes/Irods'
import { hydroshareColors } from '../themes/Hydroshare'
import { ncdsColors } from '../themes/Ncds'

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

const groups = (props) => {
    const { classes } = props
    return (
        <div className={ classes.root }>
            <Title>RENCI</Title>
            
            <Paragraph>
                At RENCI, groups are... Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et quos voluptas repellat sed reiciendis. Ea pariatur nam consequuntur fugit maxime, neque sed vitae perferendis nulla provident est voluptas. Dolore, accusamus!
            </Paragraph>
            
            <Heading>iRODS</Heading>

            <Subheading>Primary Palette</Subheading>
            <ColorSection colors={ irodsColors.primary }/>

            <Heading>Hydroshare</Heading>

            <Subheading>Primary Palette</Subheading>
            <ColorSection colors={ hydroshareColors.primary }/>

            <Heading>NCDS</Heading>
            
            <Subheading>Primary Palette</Subheading>
            <ColorSection colors={ ncdsColors.primary }/>

            <Subheading>Secondary Palette</Subheading>
            <ColorSection colors={ ncdsColors.secondary }/>

        </div>
    )
}

export default withStyles(styles)(groups)