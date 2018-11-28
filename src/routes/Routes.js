import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Brand from '../views/Brand'
import Typography from '../views/Typography'
import Color from '../views/Color'
import Writing from '../views/Writing'
import Personality from '../views/Personality'
import Groups from '../views/Groups'

const routes = props => {
    return (
        <Switch>
            <Route path="/personality" component={ Personality }/>
            <Route path="/writing" component={ Writing }/>
            <Route path="/color" component={ Color }/>
            <Route path="/typography" component={ Typography }/>
            <Route path="/groups" component={ Groups }/>
            <Route path="/" component={ Brand }/>
        </Switch>
    )
}

export default routes
