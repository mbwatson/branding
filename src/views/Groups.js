import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Switch, Route } from 'react-router-dom'

import Title from '../components/Typography/Title'
import Heading from '../components/Typography/Heading'
import Paragraph from '../components/Typography/Paragraph'

import Irods from '../views/groups/Irods'
import Hydroshare from '../views/groups/Hydroshare'
import Ncds from '../views/groups/Ncds'

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

const Index = props => {
    return (
        <div>
            <Title>RENCI Groups</Title>
            
            <Paragraph>
                At RENCI, groups are... Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem repudiandae corrupti modi dolore eum. Provident veniam repudiandae aliquam asperiores sit, quia, sint eligendi aperiam exercitationem iste necessitatibus, vitae, nobis odit.
            </Paragraph>

            <Heading>Research Groups at RENCI</Heading>
            <Paragraph>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, laudantium!
            </Paragraph>

            <Heading>Software Development Groups at RENCI</Heading>
            <Paragraph>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet fugiat quasi architecto, hic aliquam repudiandae totam recusandae quis. Quia a repellat mollitia, possimus!
            </Paragraph>
        </div>
    )
}

const groups = (props) => {
    const { classes } = props
    return (
        <div className={ classes.root }>
            <Switch>
                <Route path="/groups/irods" component={ Irods }/>
                <Route path="/groups/hydroshare" component={ Hydroshare }/>
                <Route path="/groups/ncds" component={ Ncds }/>
                <Route path="/groups" component={ Index }/>
            </Switch>
        </div>
    )
}

export default withStyles(styles)(groups)