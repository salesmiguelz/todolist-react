import { ChangeEvent, useState } from "react"
import styles from "./Input.module.css"

interface InputProps{
    handleSetTaskTitle: (taskTitle: string) => void
}
export function Input({handleSetTaskTitle}: InputProps){
    
    const [inputText, setInputText] = useState('');
    const [isFocused, setIsFocused] = useState(false);

    function handleInputTextChange(event: ChangeEvent<HTMLInputElement>){
        setInputText(event.target.value);
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
                value={inputText} 
                onChange={handleInputTextChange}
                onFocus={handleOnFocus}
                onBlur={handleOnBlur}
                className={isFocused ? styles.inputActive : styles.input}
            />
        </>
    )
}