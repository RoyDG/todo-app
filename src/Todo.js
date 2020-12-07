import { Button, List, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core';
import React from 'react';
import './Todo.css';
import db from './firebase';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';


function Todo(props) {
    return (
            <List className = "todo__list">
                <ListItem>
                <ListItemAvatar>
                </ListItemAvatar>  
                    <ListItemText
                        className = "listText"
                        primary = "Task --"
                        secondary = {props.todo.todo} 
                    />
                </ListItem>
                <DeleteOutlineIcon
                    className= "removeIcon"
                    onClick = {event => 
                        db.collection('todos').doc(props.todo.id).delete()
                    }/>              
            </List>
    )
}

export default Todo
