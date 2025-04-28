import styles from "./CreateButton.module.css"
import { BsPlusCircle } from "react-icons/bs";

interface CreateButtonProps{
    handleSetConfirmTaskCreation: () => void
}

export function CreateButton({handleSetConfirmTaskCreation}: CreateButtonProps){
    return (
    <>
        <div className={styles.createButtonContainer} onClick={handleSetConfirmTaskCreation}>
            <p>Criar</p>

            <div className={styles.createButtonIcon}>
                <BsPlusCircle
                    size={19}
                    fontWeight={'bold'}
                />
            </div>
        </div>
    </>
    )  
}