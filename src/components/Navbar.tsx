import styles from "./Navbar.module.css"
import logo from "../assets/logo.svg"
import { Input } from "./Input"
import { CreateButton } from "./CreateButton"

export function Navbar(){
    return (
        <>
            <div className={styles.navbarContainer}>
                <img src={logo} alt="" />
                <div className={styles.inputContainer}>
                    <Input />
                    <CreateButton />
                </div>
            </div>
        </>
    )
}