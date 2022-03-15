import React from "react";
import { TextField } from "@mui/material";
import { Paper } from "@mui/material";
import inputState from "./hooks/inputState.js";

function TodoForm({addTodo}){
    const [value, handleChange, reset] = inputState('')
    return (
        <Paper style={{margin: '1rem 0', padding: '0 1rem'}}>
            <form 
                onSubmit={e => {
                    e.preventDefault();
                    addTodo(value);
                    reset();
                }}>
            <TextField 
                value={value} 
                onChange={handleChange}
                margin='normal'
                label='Add new ToDo'
                fullWidth/>
            </form>
        </Paper>
    )
}

export default TodoForm