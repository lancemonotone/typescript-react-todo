import React from 'react'
import {Todo} from "../../models/Todo"
import {TodoSingle} from "./TodoSingle"
import './TodoList.scss'

interface TodoListProps {
    todos: Todo[]
    setTodo: React.Dispatch<React.SetStateAction<string>>
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoList: React.FC<TodoListProps> = ({todos, setTodo, setTodos}) => {

    return (
        <div className="todo-list">
            {todos.map(todo => (
                <TodoSingle key={todo.id}
                            todo={todo}
                            setTodo={setTodo}
                            setTodos={setTodos}/>
            ))}

        </div>
    )
}

export default TodoList