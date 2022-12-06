import React from "react"
import './InputForm.scss'

interface InputFormProps {
    title: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
}

export const InputForm: React.FC<InputFormProps> = ({title, setTodo, handleSubmit}) => {
    const inputRef = React.useRef<HTMLInputElement>(null)

    return (
        <>
            <form className="input"
                  onSubmit={e => {
                      handleSubmit(e)
                      setTodo("")
                      inputRef.current?.blur()
                  }}>
                <input value={title}
                       ref={inputRef}
                       onChange={(e) => setTodo(e.target.value)}
                       className="input__text" type="text" placeholder="Add a task"/>

                <button className="input__button" type="submit">Add</button>
            </form>
        </>
    )
}