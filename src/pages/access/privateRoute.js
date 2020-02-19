import Dashboard from './Dashboard'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react';

import MasterPage from '../../shared/components/MasterPage'
import NotFound from '../error/Notfound';
const privateRoute = (
   
    <Router>
          <Switch>
              <Route path="/access" component={Dashboard} />
              <MasterPage path="/access2" component={Dashboard}/>
              <Route path="*" component={NotFound}/>
        </Switch>
      </Router>
  )

export default privateRoute;