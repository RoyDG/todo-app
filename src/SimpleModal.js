import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import db from './firebase';
import { Button } from '@material-ui/core';




const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));


function SimpleModal(props) {

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [input, setInput] = useState('');

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const update = () => {
        db.collection('todos').doc(props.todo.id).set({todo: input },{merge: true})
        setOpen(false)
    }

  const body = (
    <div className={classes.paper}>
          <h2>Edit Your Task</h2>
          <input  value = {input}
                  placeholder = {props.todo.todo}
                  onChange = {event => setInput(event.target.value)}/>
          <Button onClick = {update}>
                            Update
          </Button>
                    
      
    </div>
  );

  return (
    <div>
      <button type="button" onClick={handleOpen}>
        Edit
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        
      >
        {body}
      </Modal>
    </div>
  );
}

export default SimpleModal
