import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
    justifyContent: 'center'
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(20),
    height: theme.spacing(20),
  },
}));

export default function ImageAvatars(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" className={classes.small} />
      <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" /> */}
      <Avatar alt="Remy Sharp" src={props.src} className={classes.large} />
    </div>
  );
}