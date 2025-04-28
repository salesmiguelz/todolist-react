import "./global.css"
import { Navbar } from "./components/Navbar"
import { TasksList } from "./components/TasksList"
import { TaskType } from "./components/Task"
import { useEffect, useState } from "react"

function App() {
  const [taskTitle, setTaskTitle] = useState('');
  const [confirmTaskCreation, setConfirmTaskCreation] = useState(false);
  const [tasks, setTasks] = useState<TaskType[]>([]);

  useEffect(() => {
    if (confirmTaskCreation && taskTitle) {
      setTasks(prev => [
        ...prev,
        {
          id: crypto.randomUUID(),
          title: taskTitle,
          isDone: false,
          deleteTask: handleDeleteTask,
          toggleTaskDone: handleToggleTaskDone
        }
      ]);

      setConfirmTaskCreation(false);
      setTaskTitle('');
    }
  }, [confirmTaskCreation, taskTitle]);

  function handleSetTaskTitle(taskTitle: string){
    setTaskTitle(taskTitle);
  }

  function handleSetConfirmTaskCreation(){
    setConfirmTaskCreation(true);
 }

 function handleToggleTaskDone(taskId: string) {
  setTasks(prevTasks =>
    prevTasks.map(task =>
      task.id === taskId ? { ...task, isDone: !task.isDone } : task
    )
  );
}

  function handleDeleteTask(taskId: string){
    setTasks(tasks => {
      return tasks.filter(task => task.id !== taskId)
    })
  }
  return (
    <>
      <Navbar
        taskTitle={taskTitle}
        handleSetTaskTitle={handleSetTaskTitle}
        handleSetConfirmTaskCreation={handleSetConfirmTaskCreation}
      />
      <TasksList 
        tasks={tasks}
        handleDeleteTask={handleDeleteTask}
        handleToggleTaskDone={handleToggleTaskDone}
      />
    </>
  )
}

export default App
