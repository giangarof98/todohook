import React from "react";
import inputState from "./hooks/inputState";
import { TextField } from "@mui/material";
import { EditLocationOutlined } from "@mui/icons-material";

function EditForm({id, task, editTodo, toggle}){
    const [value, handleChange, reset] = inputState(task)
    return(
        <form onSubmit={(e) => {
            e.preventDefault();
            editTodo(id, value);
            reset()
            toggle()
        }}
        style={{marginLeft: '1rem', width:'50%'}}>

            <TextField 
                margin="normal" 
                value={value} 
                onChange={handleChange}
                fullWidth
                autoFocus/>
        </form>
    );
}

export default EditForm;