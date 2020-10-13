import React, { useState, useImperativeHandle } from 'react';
import { Container, Button, Grid, TextField, IconButton, Checkbox } from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faUser,faKey, faEye, faEyeSlash
  } from '@fortawesome/free-solid-svg-icons';

export function Login ( props ) {
  const[ useSession, setUseSession ] = useState( true );
  const[ userName, setUserName ] = useState( '' );
  const[ nameHelpTxt, setNameHelpTxt ] = useState( '');
  const[ pswVisible, setPswVisible ] = useState( false);
  const [ psw, setPsw ] = useState('');
  const [ Err, setErr ] = useState('');
  const [ pswHelpTxt, setPswHelpTxt ] = useState(' ')

  const handlePswVisbile = () => {
    let curVisible = !pswVisible;
    setPswVisible(curVisible);
  }

  const handlePswChange = (event) => {
    if(psw.length === 0){
      setPswHelpTxt('please enter password');    
    }
    setPsw( event.target.value );
  }

  const handleNameChange = (event) => {
    if( userName.length === 0){
      setNameHelpTxt('please enter user name');    
    }
    setUserName( event.target.value);    
  }

  const handleUseSession = () => {
    setUseSession(!useSession);    
  }

  const handleLogin = () => {
     // hardcode user and password 
     //Todo: send post request tp authentificate user 
     console.log('Im here')
     const user = 'micky';
     const password = '123456'
     if( userName === user && psw === password ){
       props.handleLoggedin();
       return;  
     }
     setErr(' user or psw is incorrect');
  }

   return(
    <Container style = {{ textAlign: 'center'}}>
      <Grid>Login to continue...</Grid>
      <Grid style ={{ display: 'flex', position: 'relative', marginTop:"5%", margin:'5%', alignItems: 'center',paddingLeft: '12%'}}>
        <FontAwesomeIcon icon = {faUser } style={{margin : '5px'}}/>
        <TextField id="standard-basic" label="UserName" value = {userName} onChange = { handleNameChange } helperText ={nameHelpTxt} />
      </Grid>
      <Grid style ={{ display: 'flex', position: 'relative', marginTop:"5%", margin:'5%', alignItems: 'center', paddingLeft: '12%'}}>
        <FontAwesomeIcon icon = { faKey } style={{margin : '5px'}}/>
        <TextField id="standard-basic" label="Password" value = {psw} type ={ pswVisible? 'text':'password'} 
          helperText ={pswHelpTxt} onChange={ handlePswChange }/>
        <IconButton onClick = { handlePswVisbile }>
          <FontAwesomeIcon icon = { pswVisible? faEye: faEyeSlash} style ={{color: 'white'}}/>
        </IconButton>
      </Grid>
      <Grid style ={{ display: 'flex', position: 'relative', marginTop:"5%", margin:'5%', alignItems: 'center', paddingLeft: '20px'}}>
        <Grid><Checkbox checked = {useSession} color ={"primary"}onClick = { handleUseSession }/></Grid>
        <Grid>Rememer Me</Grid>
      </Grid>  
      <Grid style ={{margin:'5%', alignItems: 'center'}}>
          <Button variant= "contained" color= "primary" onClick={handleLogin} style = {{ width: '150px',backgroundColor:"#9e9e9e"}}>
              Login
          </Button>   
      </Grid>
      <Grid style= {{ display:'flex', alignItems:'center', alignText:"center"}} >
          <hr style={{ width:"40%"}} />
          <p>or Login with</p>
          <hr style={{ width:"40%"}} />
      </Grid>  
      <div>{Err}</div>       
    </Container>
   ); 
}