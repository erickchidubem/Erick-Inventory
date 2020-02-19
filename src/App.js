import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
/************* Components *******************/
import Login from './pages/public/Login';
//import MasterPage from './shared/components/MasterPage';
import Dashboard from './pages/access/Dashboard';
import privateRoute from './pages/access/privateRoute';
import NotFound from './pages/error/Notfound';

function App() {
  return (
      
    
    <div>
      <Router>
          <Switch>
              <Route path="/login" component={Login} />
              {/* <MasterPage path="/access" component={Dashboard}/> */}
              {privateRoute}
              <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  
  )
}

export default App;
