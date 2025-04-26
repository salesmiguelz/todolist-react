import { ChangeEvent, InputHTMLAttributes, useState } from "react"
import styles from "./Input.module.css"

type InputProps = InputHTMLAttributes<HTMLInputElement>

export function Input({...props}: InputProps){
    const [inputText, setInputText] = useState('');
    const [isFocused, setIsFocused] = useState(false);

    function handleInputTextChange(event: ChangeEvent<HTMLInputElement>){
        setInputText(event.target.value);
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
                placeholder={props.placeholder} 
                value={inputText} 
                onChange={handleInputTextChange}
                onFocus={handleOnFocus}
                onBlur={handleOnBlur}
                className={isFocused ? styles.inputActive : styles.input}
            />
        </>
    )
}