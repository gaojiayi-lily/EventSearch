import React , { useState } from 'react';
import './App.css';
import SimpleBottomNavigation from './Components/NavigationBar'
import Divider from '@material-ui/core/Divider';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { JiayiTestPage } from './Pages/Jiayi'
import { JayTestPage } from './Pages/Jay'
import { LoginRegisterPage } from './Pages/LoginRegister'
export function App() {
  const [loggedin, setloggedin ] = useState( false);

  const redirectChuying =() => {
    window.location.href = '/Chuying'
  }

  const redirectJiayi =() => {
    window.location.href = '/Jiayi'
  }

  const redirectJay =() => {
    window.location.href ='/Jay'
  }

  const handleLoggedin = () => {
    
    console.log('successfully logged in ')
    setloggedin(true)
  }

  return (
    <div className="App">
     <Router>
       {loggedin&&<SimpleBottomNavigation redirectChuying = { redirectChuying } redirectJay = {redirectJay} redirectJiayi ={ redirectJiayi}/>}
        <Divider/>
       <Switch>
       {!loggedin&&<Route  path = '/Login'>
        <LoginRegisterPage handleLoggedin = { handleLoggedin}/>
        </Route>}
       {loggedin&&<Route path = "/Chuying">
       <LoginRegisterPage/>
       </Route> }
       {loggedin&&<Route path = "/Jiayi">
        <JiayiTestPage/>
       </Route>}
       {loggedin&&<Route path = '/Jay'>
         <JayTestPage/>
      </Route>}  
     </Switch>
     </Router>   
    </div>
  );
}

