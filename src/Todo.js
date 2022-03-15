import React from "react";
import { ListItem, 
        ListItemText, 
        Checkbox, 
        IconButton, 
        ListItemSecondaryAction} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

function Todo({task, completed, removeTodo, id, toggleTodo}){
    return (
        <ListItem>
            <Checkbox 
                tabIndex={-1} 
                checked={completed}
                onClick={() => toggleTodo(id)}/>
            <ListItemText 
                style={{textDecoration: completed ? 'line-through' : 'none'}}>
                {task}
            </ListItemText>
            <ListItemSecondaryAction>
                <IconButton 
                    aria-label="Delete"
                    onClick={() => removeTodo(id)}>
                    <DeleteIcon/>
                </IconButton>
                <IconButton 
                    aria-label="Edit"
                    >
                    <EditIcon/>
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    )
}

export default Todo;