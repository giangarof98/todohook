import React from "react";
import { TextField } from "@mui/material";
import { Paper } from "@mui/material";
import inputState from "./hooks/inputState.js";

function TodoForm({addTodo}){
    const [value, handleChange, reset] = inputState('')
    return (
        <Paper>
            <form 
                onSubmit={e => {
                    e.preventDefault();
                    addTodo(value);
                    reset();
                }}>
            <TextField value={value} onChange={handleChange}/>
            </form>
        </Paper>
    )
}

export default TodoForm