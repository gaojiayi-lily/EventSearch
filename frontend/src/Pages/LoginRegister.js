import React, { useState } from 'react';
import { Container, ButtonGroup, Button, Grid} from '@material-ui/core'
import img from '../../src/Assets/background.jpg'
import { Login } from '../Components/Login'

export function LoginRegisterPage ( props ) {
  const [ openLogin, setOpenLogin ] = useState(true);

  const handleSwitchLogin = ( isLogin ) => {
      setOpenLogin (isLogin)
  }

  return(
  <div style = {{ display: 'flex'}}>   
  <Container style = {{   height: '100vh', width: '100%',
  float: 'left', backgroundImage: `url(${img})`, backgroundSize: '100% 100%',
  backgroundRepeat: 'no-repeat'}}>
  </Container >
  <Container style = {{ height:'100vh', width:'100%', float: 'right'}}>
    <Grid style = {{ position:' relative', marginTop: '10%'}}>
    <ButtonGroup variant= "contained" color= "primary" aria-label="contained primary button group">
      <Button onClick = { () => {handleSwitchLogin(true)}} style ={{width: '150px', backgroundColor: openLogin? '#e0e0e0': '#9e9e9e',
       }}>
        Login
      </Button>
      <Button onClick = { () => {handleSwitchLogin( false)}} style ={{width: '150px', backgroundColor: openLogin? '#9e9e9e': '#e0e0e0',
      }}>
        Register
      </Button>
    </ButtonGroup>
    </Grid>
    <Grid style = {{  position: 'relative' ,marginTop:'10%'}}>
      { openLogin ? 
       <Login handleLoggedin = { props.handleLoggedin }/>
       :
       <div> Register component, need replace here later </div>
      }
    </Grid>
  </Container>
  </div>
  );     
}