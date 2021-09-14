import React, { Fragment, useState, useRef } from 'react';
import { v4 as uuid } from 'uuid'
import { TodoListA } from './components/TodoListA';
export function App() {
    const [todos, setTodos] = useState([
        { id: 1 , task: 'task 1', state: false }
    ]);

    const todoTaskRef = useRef();
    const toggleTodo = (id) =>{
        console.log(id);
         const newTodos = [...todos];
         const todo = newTodos.find((todo) => todo.id = id)
         todo.state = !todo.state;
         setTodos(newTodos)
    }
    const handlerTodoAdd = () => {
        const task = todoTaskRef.current.value;
        if (task === null) return
        setTodos((prevTodos) => {
            return [...prevTodos, { id: uuid(), task, state: true }]
        })
        todoTaskRef.current.value = null

    }
    return (

        <Fragment>
            <TodoListA todos={todos} toggleTodo= {toggleTodo} />
            <input ref={todoTaskRef} type="text" placeholder="New Task" />
            <button onClick={handlerTodoAdd} >+</button>
            <button>-</button>
            <div>You have {todos.filter((todo) => !todo.state).length} task per completed</div>
        </Fragment>
    );

}