import { ChangeEvent, useState } from "react"
import styles from "./Input.module.css"

interface InputProps{
    taskTitle: string
    handleSetTaskTitle: (taskTitle: string) => void
}
export function Input({taskTitle, handleSetTaskTitle}: InputProps){
    
    const [isFocused, setIsFocused] = useState(false);

    function handleInputTextChange(event: ChangeEvent<HTMLInputElement>){
        handleSetTaskTitle(event.target.value);
    }

    function handleOnFocus(){
        setIsFocused(true);
    }
    function handleOnBlur(){
        setIsFocused(false)
    }

    return (
        <>
            <input 
                type="text" 
                placeholder={"Adicione uma nova tarefa"} 
                value={taskTitle} 
                onChange={handleInputTextChange}
                onFocus={handleOnFocus}
                onBlur={handleOnBlur}
                className={isFocused ? styles.inputActive : styles.input}
            />
        </>
    )
}