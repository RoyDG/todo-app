import { Button, List, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core';
import React from 'react';
import './Todo.css';
import db from './firebase';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';


function Todo(props) {
    return (
            <div className = "todo">
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
