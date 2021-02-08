import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  root: {
    backgroundColor: 'transparent',
    border: '1px solid white',
    borderRadius: 50,
    color: 'white',
    height: 48,
    padding: '30px',
    width: 300,
    fontFamily: 'Roboto',
    fontWeight: '300',
    fontSize: '1.02em'
  },
});

export default function Hook(props) {
  const classes = useStyles();
  return <Button className={classes.root}>{props.icon}{props.text}</Button>;
}