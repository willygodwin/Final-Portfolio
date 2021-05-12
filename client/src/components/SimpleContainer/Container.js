import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ImageAvatars from '../ImageAvatar/ImageAvatar';
import AboutInfo from '../AboutInfo/AboutInfo';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    // color: theme.palette.text.secondary,
    backgroundColor:  "#ffffff50",
    height: theme.spacing(48),
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}  className={classes.paper} >
      
        <Grid item xs={2}>
        </Grid>
        <Grid item xs={8} style={{textAlign:'left'}}>
          {/* <Paper  className={classes.paper} style={{textAlign:'left', backgroundColor:'#ffffff00'}}> */}
            <Grid container spacing={3}> 
                <Grid item xs={4}>

                </Grid>
                <Grid item xs={8}>
                <h2 >About Me</h2>
                    
                </Grid>
            </Grid>
            
            <Grid container spacing={3}>
                <Grid item xs={4}>
                    <div>
                    <ImageAvatars src="/assets/images/profilepic.jpg"/>
                    <ul>
                        <li>
                            Location: Perth, Western Australia
                        </li>
                        <li>
                            Email: willygodwin47@gmail.com
                        </li>
                        <li>
                            Mobile: 0414487511
                        </li>
                    </ul>
                    
                    
                    

                    </div>
                    
                        
                   
                  
                </Grid>
               
                <Grid item xs={8} >
                    <AboutInfo></AboutInfo>
                </Grid>
              </Grid>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                
                </Grid>
               
            
              </Grid>
            {/* </Paper> */}
        </Grid>
        <Grid item xs={2}>
          
        </Grid>

      </Grid>
    </div>
  );
}