import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { NavLink } from 'react-router-dom'
import { List, ListSubheader, ListItem, ListItemIcon, ListItemText, Collapse } from '@material-ui/core'
import {
    Dashboard as DashboardIcon,
    Face as FaceIcon,
    Edit as EditIcon,
    ColorLens as ColorLensIcon,
    TextFields as FontsIcon,
    KeyboardArrowRight as KeyboardArrowRightIcon,
    GroupWork as GroupWorkIcon,
    Inbox as InboxIcon,
    ExpandLess,
    ExpandMore,
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

const groupsMenuItems = [
    { text: 'iRODS', path: '/groups/irods', icon: <KeyboardArrowRightIcon/> },
    { text: 'NCDS', path: '/groups/ncds', icon: <KeyboardArrowRightIcon/> },
    { text: 'Hydroshare', path: '/groups/hydroshare', icon: <KeyboardArrowRightIcon/> },
]

class menu extends Component {
    state = {
        open: true,
    }

    clickHandler = () => {
        this.setState(state => ({ open: !state.open }))
    }

    render() {
        const { classes } = this.props
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
                    <ListItem button onClick={ this.clickHandler }>
                        <ListItemIcon>
                            <InboxIcon />
                        </ListItemIcon>
                        <ListItemText inset primary="Inbox" />
                        { this.state.open ? <ExpandLess /> : <ExpandMore /> }
                    </ListItem>
                </List>
                <Collapse in={ this.state.open } timeout="auto" unmountOnExit>
                    <List component="div">
                        {
                            groupsMenuItems.map( (item) => {
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
                </Collapse>
            </div>
        )        
    }
}

export default withStyles(styles)(menu)
