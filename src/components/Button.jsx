import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  root: {
    backgroundColor: 'white',
    border: '1px solid #eb4d4b',
    borderRadius: 50,
    color: '#eb4d4b',
    height: 48,
    padding: '30px',
    width: 300,
    fontFamily: 'Roboto',
    fontWeight: '400',
    fontSize: '1.02em',
  },
});

export default function Hook(props) {
  const classes = useStyles();
  return <Button className={classes.root}>{props.icon}{props.text}</Button>;
}