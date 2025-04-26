import { useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { MdDone } from "react-icons/md";

import styles from "./Task.module.css"

export function Task(){
    const [taskDone, setTaskDone] = useState(true);

    function handleTaskStatus(){
        setTaskDone(!taskDone)
    }

    return (
        <>
            <div className={styles.task} onClick={handleTaskStatus}>
                <div className={styles.taskStatusIcon}>
                    {
                        taskDone ? (
                            <div className={styles.taskDoneIcon}>
                                <MdDone 
                                    size={12}
                                />
                            </div>
                        ) : (
                            <div className={styles.taskPendingIcon}></div>
                        )
                    }
                </div>
                <div className={taskDone ? styles.taskCrossedText : styles.taskText}>
                    <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
                </div>

                <div className={styles.taskTrashIcon}>
                    <FaRegTrashAlt 
                        size={15}
                    />
                </div>
            </div>
        </>

    )
}