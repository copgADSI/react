
import React, {useRef} from 'react'

export function TodoItem({ todo, toggleTodo }) {
    const taskState = useRef()
    const { id, task, state } = todo
    const handleTodoClick = () => {
        toggleTodo(id)
    }
    console.log(state, task);
    return (
        <li>
            <input type="checkbox" ref={taskState}  checked={state} onChange={handleTodoClick}  />
             {task}
        </li>
    )
}
