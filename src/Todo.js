import { List, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core'
import React from 'react'
import './Todo.css'

function Todo(props) {
    return (
            <List className = "todo__list">
                <ListItem>
                <ListItemAvatar>
                </ListItemAvatar>  
                    <ListItemText
                        primary = "Task --"
                        secondary = {props.text} 
                    />
                </ListItem>
            </List>
    )
}

export default Todo
