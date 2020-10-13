import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FaceIcon from '@material-ui/icons/Face';


const useStyles = makeStyles({
  root: {
    width: 500,
  },
});

export default function SimpleBottomNavigation( props ) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
        if( newValue ===0 ){
           props.redirectChuying()
        }
        if( newValue === 1 ){
            props.redirectJiayi()
        }
        if( newValue === 2){
            props.redirectJay()
        }
        
      }}
      
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction  label="Chuying" icon={<FaceIcon />} />
      <BottomNavigationAction label="Jiayi" icon={<FaceIcon />} />
      <BottomNavigationAction label="Jay" icon={<FaceIcon />} />
    </BottomNavigation>
  );
}