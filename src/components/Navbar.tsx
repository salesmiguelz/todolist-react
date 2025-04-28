import styles from "./Navbar.module.css"
import logo from "../assets/logo.svg"
import { Input } from "./Input"
import { CreateButton } from "./CreateButton"

interface NavbarProps {
    handleSetTaskTitle: (task: string) => void;
    handleSetConfirmTaskCreation: () => void;
}

export function Navbar({handleSetTaskTitle, handleSetConfirmTaskCreation}: NavbarProps){
    return (
        <>
            <div className={styles.navbarContainer}>
                <img src={logo} alt="" />
                <div className={styles.inputContainer}>
                    <Input 
                        handleSetTaskTitle={handleSetTaskTitle}
                    />
                    <CreateButton 
                        handleSetConfirmTaskCreation={handleSetConfirmTaskCreation}
                    />
                </div>
            </div>
        </>
    )
}