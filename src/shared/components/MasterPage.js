import React from 'react';
import Header from './Header';
import SideBar from './SideBar';  
import { Route, Redirect } from 'react-router-dom';
//import { authenticationService } from '@/_services';

const DashboardLayout = ({children, ...rest}) => {  

    return (  
      
            <div className='MasterPage'>
                    <Header />
                    <SideBar/>
                    {children }
           </div>
    )  
  }  
    
  const MasterPage = ({component: Component, ...rest}) => { 
    
   // const currentUser = authenticationService.currentUserValue;
   const currentUser = true;
   if (!currentUser) {
    // not logged in so redirect to login page with the return url
    return <Redirect to='/login' />
  }
    return (  
      <Route {...rest} render={matchProps => ( 
           
        <DashboardLayout>  
            <Component {...matchProps} />  
        </DashboardLayout>  
      )} />  
    )  
  };  

  export default MasterPage;  