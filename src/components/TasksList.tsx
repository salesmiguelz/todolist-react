import { useState } from "react";
import Clipboard from "../assets/clipboard.svg"
import styles from "./TasksList.module.css"

export function TasksList(){
    const [tasks, setTasks] = useState([]); 
    return (
          <div className={styles.tasksListContainer}>
            <div className={styles.tasksList}>
                    <div className={styles.tasksInfo}>
                        <div className={styles.tasksCreated}>
                            <p>Tarefas criadas <span>0</span></p>
                        </div>

                        <div className={styles.tasksDone}>
                            <p>Concluídas <span>2</span></p>
                        </div>
                    </div>

                    <hr />

                    {tasks.length > 0 ? (
                        <h1>tasks</h1>
                    ) : (
                        <div className={styles.noTasksMessage}>
                            <img src={Clipboard} alt="" />
                            <div className={styles.noTasksMessageText}>
                                <p><b>Você ainda não tem tarefas cadastradas</b></p>
                                <p>Crie tarefas e organize seus itens a fazer</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
    )
}