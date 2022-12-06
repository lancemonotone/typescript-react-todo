import React, {useEffect, useState} from "react"
import './App.scss'
import {InputForm} from "./components/InputForm/InputForm"
import {Todo} from "./models/Todo"
import TodoList from "./components/List/TodoList"


const App: React.FC = () => {
    const [todo, setTodo] = useState<string>("")
    const [todos, setTodos] = useState<Todo[]>(JSON.parse(localStorage.getItem('com.lancemonotone.todos') as string)||[])

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        todo && setTodos([...todos, {
            id: Date.now(),
            title: todo,
            completed: false
        }])
    }

    useEffect(() => {
        console.log(todos)
        localStorage.setItem('com.lancemonotone.todos', JSON.stringify(todos))
    }, [todos])

    return (
        <div className="App">
            <h1 className="heading">Taskify</h1>

            <InputForm title={todo}
                       setTodo={setTodo}
                       handleSubmit={handleSubmit}/>

            <TodoList todos={todos} setTodos={setTodos} setTodo={setTodo}/>
        </div>
    )
}

export default App
