import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  root: {
    backgroundColor: '#eb4d4b',
    borderRadius: 5,
    color: 'white',
    maxHeight: 15,
    padding: '30px',
    width: 330,
    fontFamily: 'Roboto',
    fontWeight: '400',
    fontSize: '1.0em',
    "&:hover": {
      backgroundColor: '#eb4d4b',
      opacity: 0.85,
      transition: 'all 0.5s ease-out'
    }
  }
});

export default function Hook(props) {
  const classes = useStyles();

  return <Button className={classes.root}>{props.icon}{props.text}</Button>;
}