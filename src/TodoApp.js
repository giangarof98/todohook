import React, {useEffect} from 'react';
import TodoList from './TodoList.js';
import TodoForm from './TodoForm.js';
import todoState from './hooks/todoState.js';
import { Typography } from '@mui/material';
import { Paper } from '@mui/material';
import { AppBar } from '@mui/material';
import { Toolbar } from '@mui/material';
import { Grid } from '@mui/material';

function TodoApp() {
  const initialTodos = JSON.parse(window.localStorage.getItem('todos') || '[]');
  const {
    todos,
    addTodo,
    removeTodo,
    toggleTodo,
    editTodo
  } = todoState(initialTodos);
  useEffect(() => {
    window.localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

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
      <Grid container justifyContent='center' style={{marginTop:'1rem'}}>
        <Grid item xs={11} md={8} lg={4}>
          <TodoForm addTodo={addTodo}/>
          <TodoList 
            todos={todos} 
            removeTodo={removeTodo}
            toggleTodo={toggleTodo}
            editTodo={editTodo}/>
        </Grid>
      </Grid>
    </Paper>

  );
}

export default TodoApp;