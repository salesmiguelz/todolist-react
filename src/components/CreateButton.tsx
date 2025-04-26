import styles from "./CreateButton.module.css"
import { BsPlusCircle } from "react-icons/bs";

export function CreateButton(){
    return (
    <>
        <div className={styles.createButtonContainer}>
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