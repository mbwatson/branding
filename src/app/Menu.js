import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { NavLink } from 'react-router-dom'
import { List, ListSubheader, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import {
    Dashboard as DashboardIcon,
    Face as FaceIcon,
    Edit as EditIcon,
    ColorLens as ColorLensIcon,
    TextFields as FontsIcon,
    KeyboardArrowRight as KeyboardArrowRightIcon,
    GroupWork as GroupWorkIcon,
} from '@material-ui/icons'

const styles = (theme) => ({
    active: {
        backgroundColor: theme.palette.grey[300],
    }
})
const mainMenuItems = [
    { text: 'Brand', path: '/', icon: <DashboardIcon/> },
    { text: 'Personality', path: '/personality', icon: <FaceIcon/> },
    { text: 'Writing', path: '/writing', icon: <EditIcon/> },
    { text: 'Color', path: '/color', icon: <ColorLensIcon/> },
    { text: 'Typography', path: '/typography', icon: <FontsIcon/> },
    { text: 'Groups', path: '/groups', icon: <GroupWorkIcon/> },
]

// const groupsMenuItems = [
//     { text: 'iRODS', path: '/groups/irods', icon: <KeyboardArrowRightIcon/> },
//     { text: 'NCDS', path: '/groups/ncds', icon: <KeyboardArrowRightIcon/> },
//     { text: 'Hydroshare', path: '/groups/hydroshare', icon: <KeyboardArrowRightIcon/> },
// ]

const menu = props => {
    const { classes } = props
    return (
        <div>
            <List subheader={<ListSubheader component="div">RENCI</ListSubheader>}>
                {
                    mainMenuItems.map( (item) => {
                        return (
                            <ListItem button component={ NavLink } to={ item.path }
                                key={ item.text } activeClassName={ classes.active } exact
                            >
                                <ListItemIcon>
                                    { item.icon }
                                </ListItemIcon>
                                <ListItemText primary={ item.text } />
                            </ListItem>
                        )
                    })
                }
            </List>
        </div>
    )
}

export default withStyles(styles)(menu)
