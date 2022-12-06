import {Todo} from "../../models/Todo"
import React, {ChangeEvent, useEffect} from "react"
import './TodoSingle.scss'
import {AiFillDelete, AiFillEdit, AiOutlineCheck} from "react-icons/ai"

// import {AiFillDelete} from "react-icons"

interface TodoSingleProps {
    todo: Todo
    setTodo: React.Dispatch<React.SetStateAction<string>>
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

export const TodoSingle: React.FC<TodoSingleProps> = ({todo, setTodos}) => {
    const [isEditing, setIsEditing] = React.useState<boolean>(false)
    const [editValue, setEditValue] = React.useState<string>(todo.title)
    const inputRef = React.useRef<HTMLInputElement>(null)

    const handleComplete = (id: number) => {
        setTodos(prevState => prevState.map(todo => {
            if (todo.id === id) {
                return {
                    ...todo,
                    completed: !todo.completed
                }
            }
            return todo
        }))
    }

    const handleDelete = (id: number) => {
        setTodos(prevState => prevState.filter(todo => todo.id !== id))
    }

    const handleEdit = () => {
        setIsEditing(!isEditing)
    }

    useEffect(() => {
        inputRef.current?.focus()
    }, [isEditing])

    const commitEdit = (e: React.FormEvent, id: number) => {
        e.preventDefault()
        setTodos(prevState => prevState.map(todo => {
            if (todo.id === id) {
                return {
                    ...todo,
                    title: editValue
                }
            }
            return todo
        }))
        setIsEditing(false)
    }

    return (
        <>
            <form className="todo-list__item"
                  onSubmit={e => commitEdit(e, todo.id)}>
                <span className={`todo-single__title ${todo.completed ? 'todo-single__title--completed' : ''}`}>
                    {isEditing
                        ? <input value={editValue}
                                 ref={inputRef}
                                 className="input__text"
                                 onChange={(e: ChangeEvent<HTMLInputElement>) => setEditValue(e.target.value)}
                                 onBlur={(e) => commitEdit(e, todo.id)}/>
                        : todo.title}
                        </span>
                <span className="todo-single__actions">
                        <span className="todo-single__action"
                              onClick={() => handleEdit()}><AiFillEdit/></span>
                        <span className="todo-single__action"
                              onClick={() => handleDelete(todo.id)}><AiFillDelete/></span>
                        <span className="todo-single__action"
                              onClick={() => handleComplete(todo.id)}><AiOutlineCheck/></span>
                        </span>
            </form>
        </>
    )
}