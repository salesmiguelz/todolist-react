import "./global.css"
import { Navbar } from "./components/Navbar"
import { TasksList } from "./components/TasksList"
import { TaskType } from "./components/Task"
import { useEffect, useState } from "react"

function App() {
  const [confirmTaskCreation, setConfirmTaskCreation] = useState(false);
  const [taskTitle, setTaskTitle] = useState('');
  const [tasks, setTasks] = useState<TaskType[]>([]);

  useEffect(() => {
    if (confirmTaskCreation && taskTitle) {
      setTasks(prev => [
        ...prev,
        {
          id: crypto.randomUUID(),
          title: taskTitle,
          isDone: false,
          deleteTask: handleDeleteTask
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

  function handleDeleteTask(taskId: string){
    setTasks(tasks => {
      return tasks.filter(task => task.id !== taskId)
    })
  }
  return (
    <>
      <Navbar
        handleSetTaskTitle={handleSetTaskTitle}
        handleSetConfirmTaskCreation={handleSetConfirmTaskCreation}
      />
      <TasksList 
        tasks={tasks}
        handleDeleteTask={handleDeleteTask}
      />
    </>
  )
}

export default App
