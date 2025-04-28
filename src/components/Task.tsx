import { useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { MdDone } from "react-icons/md";

import styles from "./Task.module.css"

export interface TaskType{
    id: string
    title: string
    isDone?: boolean
}

export function Task({title, isDone}: TaskType){
    const [taskDone, setTaskDone] = useState(isDone);

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
                    <p>{title}</p>
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