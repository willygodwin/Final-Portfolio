import React from "react";
import ProjectInfo from "../components/ProjectInfo/ProjectInfo"
import Seperator from "../components/Seperator/Seperator"
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      // color: theme.palette.text.secondary,
      backgroundColor:  "#ffffff50",
    //   height: theme.spacing(48),
    },
  }));

function ProjectPage(props) {

      const classes = useStyles();

    return (
        
        <div className={classes.root}>
            <Seperator/>
            <Grid container spacing={3} className={classes.paper}>
                <Grid item xs={2}>
                </Grid>
                <Grid item xs={8}>
                <ProjectInfo {...props}/>
                </Grid>
                <Grid item xs={2}>
                </Grid>
            </Grid>
            
        </div>

    
    );
  }
  
  export default ProjectPage;