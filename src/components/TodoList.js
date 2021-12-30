import React, {useState} from 'react'
import TodoForm from './TodoForm';
import Todo from './Todo';


function TodoList() {
       const [todos, setTodos] = useState([]);

       const addTodo = todo =>{
           const newTodo = [todo, ...todos];
           setTodos(newTodo);
           
       }
    return (
        <div>
            <h1>What is the plan today?</h1>
            <TodoForm onSubmit={addTodo} />
            <Todo todos={todos} />
        </div>
    )
}

export default TodoList
