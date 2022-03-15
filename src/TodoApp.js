import React, {useState} from 'react';
import TodoList from './TodoList.js';
import TodoForm from './TodoForm.js';
import { Typography } from '@mui/material';
import { Paper } from '@mui/material';
import { AppBar } from '@mui/material';
import { Toolbar } from '@mui/material';
import { Grid } from '@mui/material';

function TodoApp() {
  const initialTodos = [
    {id:1, task:'workout', completed:false},
    {id:2, task:'coding', completed:true},
    {id:3, task:'sleep', completed:true},
  ];
  const [todos, setTodos] = useState(initialTodos);
  const addTodo = newTodoText => {
      setTodos([...todos,{id:4, task:newTodoText, completed:false}])
  }
  return (
    <Paper style={{
      padding:0,
      margin:0,
      height:"100vh",
      backgroundColor: "#fafafa"
    }}
    elevation={0}>
      <AppBar color='primary' position='static' style={{height: '64px'}}>
        <Toolbar>
          <Typography color='inherit'>Todo list with Hooks</Typography>
        </Toolbar>
      </AppBar>
      <TodoForm addTodo={addTodo}/>
      <TodoList todos={todos}/>
    </Paper>

  );
}

export default TodoApp;