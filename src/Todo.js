import { Button, List, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core';
import React, { useState } from 'react';
import './Todo.css';
import db from './firebase';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';





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

function Todo(props) {

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
    };

    return (  
            <div className = "todo"> 
                      
                <div>
                    <Modal
                        open={open}
                        onClose={handleClose}
                    >
                    <div className={classes.paper}>
                        <h2>Edit Your Task</h2>
                        <input  value = {input}
                            placeholder = {props.todo.todo}
                            onChange = {event => setInput(event.target.value)}/>
                    <Button onClick = {update}>
                                    Update
                    </Button>
                    </div>
                    </Modal>
                </div>

                <List className = "list">
                    <div>                    
                        <ListItem>
                        <ListItemAvatar>
                        </ListItemAvatar>  
                        <ListItemText
                            className = "listText"
                            primary = "Task --"
                            secondary = {props.todo.todo} 
                        />
                        </ListItem>
                    </div>
                             
                    <div className = "removeIcon">
                        <div>
                            <button type = "button"
                                    className = "editButton"
                                    onClick = { handleOpen }>
                                        Edit                              
                            </button>
                            
                        </div>

                        <DeleteOutlineIcon 
                            onClick = {event => 
                        db.collection('todos').doc(props.todo.id).delete()
                        }/> 
                    </div>             
                </List>
              
            </div>
    )
}

export default Todo
