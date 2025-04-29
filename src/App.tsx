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
    const storedTasks = Object.keys(localStorage)
      .filter(key => key.startsWith('task-'))
      .map(key => JSON.parse(localStorage.getItem(key) || ''))
    
    setTasks(storedTasks);
  }, []);

  useEffect(() => {
    if (confirmTaskCreation && taskTitle) {
      const task = {
        id: crypto.randomUUID(),
        title: taskTitle,
        isDone: false,
        deleteTask: handleDeleteTask,
        toggleTaskDone: handleToggleTaskDone
      }
      setTasks(prev => [
        ...prev,
        task
      ]);

      setConfirmTaskCreation(false);
      setTaskTitle('');
      localStorage.setItem(`task-${task.id}`, JSON.stringify(task))
    }
  }, [confirmTaskCreation, taskTitle]);

  function handleSetTaskTitle(taskTitle: string){
    setTaskTitle(taskTitle);
  }

  function handleSetConfirmTaskCreation(){
    setConfirmTaskCreation(true);
 }

 function handleToggleTaskDone(taskId: string) {
  setTasks(prevTasks => {
    const updatedTasks = prevTasks.map(task => {
      if (task.id === taskId) {
        const updatedTask = { ...task, isDone: !task.isDone };
        localStorage.setItem(`task-${taskId}`, JSON.stringify(updatedTask));
        return updatedTask;
      }
      return task;
    });

    return updatedTasks;
  });
}

  function handleDeleteTask(taskId: string){
    setTasks(tasks => {
      const updatedTasks = tasks.filter(task => task.id !== taskId);
      localStorage.removeItem(`task-${taskId}`);  
      return updatedTasks;
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
