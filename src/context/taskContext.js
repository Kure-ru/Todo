import { createContext, useState, useEffect, useMemo } from "react";
// import { filterTasks } from "../utils/filterTasks";

const taskContext = createContext();

export const getLocalStorage = () => {
  let tasks = localStorage.getItem("tasks");
  if (tasks) {
    return (tasks = JSON.parse(localStorage.getItem("tasks")));
  } else {
    return [];
  }
};

export const TodoProvider = ({ children }) => {
  const [tasks, setTasks] = useState(getLocalStorage());
  const [mode, setMode] = useState("all");
  const visibleTasks = useMemo(() => filterTasks(tasks, mode), [tasks, mode]);
  // const [list, updateList] = useState(visibleTasks)

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function addTask(item) {
    setTasks([item, ...tasks])
  }

    function filterTasks(tasks, mode) {

    return tasks.filter(task => {
      if (mode === 'all') {
        return true;
      } else if (mode === 'active') {
        console.log(task)
        return task.isActive;
      } else if (mode === 'completed') {
        return !task.isActive;
      }
    });
  }
  

  return (
    <taskContext.Provider
      value={{
        tasks,
        visibleTasks,
        setTasks,
        mode,
        setMode,
        addTask,
        filterTasks,
      }}
    >
      {children}
    </taskContext.Provider>
  );
};

export default taskContext;
