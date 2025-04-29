import Clipboard from "../assets/clipboard.svg"
import styles from "./TasksList.module.css"
import { Task, TaskType } from "./Task";

interface TasksListProps{
    tasks: TaskType[]
    handleDeleteTask: (taskId: string) => void
    handleToggleTaskDone: (taskId: string) => void
}


export function TasksList({tasks, handleDeleteTask, handleToggleTaskDone}: TasksListProps){
    const doneTasksCount = tasks.filter(task => task.isDone).length;
    return (
          <div className={styles.tasksListContainer}>
            <div className={styles.tasksList}>
                    <div className={styles.tasksInfo}>
                        <div className={styles.tasksCreated}>
                            <p>Tarefas criadas <span>{tasks.length}</span></p>
                        </div>

                        <div className={styles.tasksDone}>
                            <p>Concluídas <span>{doneTasksCount} de {tasks.length}</span></p>
                        </div>
                    </div>

                    <hr />
                    {tasks.length > 0 ? (
                        <div className={styles.tasks}>
                            {tasks.map(task => (
                            <Task
                                key={task.id}
                                id={task.id}
                                title={task.title}
                                isDone={task.isDone}
                                deleteTask={handleDeleteTask}
                                toggleTaskDone={handleToggleTaskDone}
                            />
                            ))}
                        </div>
                        ) : (
                        <div className={styles.noTasksMessage}>
                            <img src={Clipboard} alt="" />
                            <div className={styles.noTasksMessageText}>
                            <p><b>Você ainda não tem tarefas cadastradas</b></p>
                            <br />
                            <p>Crie tarefas e organize seus itens a fazer</p>
                            </div>
                        </div>
                        )}

                </div>
            </div>
    )
}