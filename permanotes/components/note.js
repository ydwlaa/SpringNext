import styles from './note.module.css'
import { getNoteContext } from '../lib/fetch' 
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const noteStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '100%',
    backgroundColor: theme.palette.background.paper,
    position: 'relative',
    overflow: 'auto',
    maxHeight: '70vh',
  },
  listSection: {
    backgroundColor: 'inherit',
  },
  ul: {
    backgroundColor: 'inherit',
    padding: 0,
  },
}));

const inputStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '90%',
    },
  },
}));

const buttonStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function Note_context({noteData}) {
  const notestyles = noteStyles();
  const inputstyles = inputStyles();
  const buttonstyles = buttonStyles();

  async function test() {
    const data = {
      noteID : '1'
    };
    const res = await fetch('http://localhost:3000/read?' + new URLSearchParams(data));
    const noteData = await res.json();
    console.log(noteData);
    console.log(JSON.stringify(noteData));
  }

  return (
  <div className ={styles.noteMain}>
      <h1>
        The dream  
      </h1>
      <List className={notestyles.root}>
        <li>
          {
            noteData.map(
              (name,index)=>
              (             
              <ul><ListItem><ListItemText primary={index+1} secondary={name}/></ListItem></ul>)           
            )
          }
          
        </li>
    </List>

    <form className={inputstyles.root} noValidate autoComplete="off">
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
    </form>

    <div className={buttonstyles.root}>
      <Button variant="contained" color="primary">
        Primary
      </Button>

      <Button onClick ={test} variant="contained" color="primary">
        Test Button
      </Button>

    </div>

  </div>
  
  )
}
