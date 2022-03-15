import React, {useState} from 'react';
import TodoApp from './TodoApp.js'
import TodoList from './TodoList.js';
import { Typography } from '@mui/material';
import { Paper } from '@mui/material';
import { AppBar } from '@mui/material';
import { Toolbar } from '@mui/material';
import { Grid } from '@mui/material';

function App() {
  const initialTodos = [
    {id:1, task:'workout', completed:false},
    {id:2, task:'coding', completed:true},
    {id:3, task:'sleep', completed:true},
  ];
  const [todos, setTodos] = useState(initialTodos);
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
      <TodoList todos={todos}/>
    </Paper>

  );
}

export default App;
