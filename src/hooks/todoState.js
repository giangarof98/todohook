import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default initialTodos => {
    const [todos, setTodos] = useState(initialTodos);
    return {
        todos,
        addTodo: newTodoText => {
            setTodos([...todos,{id: uuidv4(), task:newTodoText, completed:false}])
        },
        removeTodo: todoId => { 
            const updateTodo = todos.filter(todo => todo.id !== todoId);
            setTodos(updateTodo)
        },
        toggleTodo: todoId => {
            const updateTodo = todos.map(todo =>
              todo.id === todoId ? {...todo, completed: !todo.completed} : todo  
            )
            setTodos(updateTodo)
        },
        editTodo: (todoId, newTask) => {
            const updateTodo = todos.map(todo =>
              todo.id === todoId ? {...todo, task: newTask} : todo  
            )
            setTodos(updateTodo)
        }
    }
}