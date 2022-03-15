import React, {useState} from 'react';
import TodoList from './TodoList.js';
import TodoForm from './TodoForm.js';
import { Typography } from '@mui/material';
import { Paper } from '@mui/material';
import { AppBar } from '@mui/material';
import { Toolbar } from '@mui/material';
import { Grid } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';

function TodoApp() {
  const initialTodos = [
    {id:1, task:'workout', completed:false},
    {id:2, task:'coding', completed:true},
    {id:3, task:'sleep', completed:true},
  ];
  const [todos, setTodos] = useState(initialTodos);
  const addTodo = newTodoText => {
      setTodos([...todos,{id: uuidv4(), task:newTodoText, completed:false}])
  }
  const removeTodo = todoId => { 
    const updateTodo = todos.filter(todo => todo.id !== todoId);
    setTodos(updateTodo)
  };
  const toggleTodo = todoId => {
    const updateTodo = todos.map(todo =>
      todo.id === todoId ? {...todo, completed: !todo.completed} : todo  
    )
    setTodos(updateTodo)
  };

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
            toggleTodo={toggleTodo}/>
        </Grid>
      </Grid>
    </Paper>

  );
}

export default TodoApp;