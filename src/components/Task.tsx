import { FaRegTrashAlt } from "react-icons/fa";
import { MdDone } from "react-icons/md";

import styles from "./Task.module.css"

export interface TaskType{
    id: string
    title: string
    isDone?: boolean
    deleteTask: (taskId: string) => void
    toggleTaskDone: (taskId: string) => void
}

export function Task({id, title, isDone, deleteTask, toggleTaskDone}: TaskType){
    function handleTaskStatus(){
        toggleTaskDone(id)
    }
    function handleDeleteTask(){
        deleteTask(id)
    }
    return (
        <>
            <div className={styles.task} onClick={handleTaskStatus}>
                <div className={styles.taskStatusIcon}>
                    {
                        isDone ? (
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
                <div className={isDone ? styles.taskCrossedText : styles.taskText}>
                        <p>
                            {title.length > 80
                                ? title.slice(0, 80) + "..."
                                : title}
                        </p>
                    </div>

                <div className={styles.taskTrashIcon} onClick={handleDeleteTask}>
                    <FaRegTrashAlt 
                        size={15}
                    />
                </div>
            </div>
        </>

    )
}