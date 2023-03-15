import { useMemo } from "react";
import { filterTasks } from "../utils/filterTasks";

import iconCheck from "../assets/icon-check.svg";
import iconCross from "../assets/icon-cross.svg";



const Task = ({ task, setTasks, tasks }) => {

  const handleClick = () => {
    const newTasks = [...tasks]
    if (task.isActive){
      const newTask = {id: task.id, name: task.name, isActive: false}
      newTasks[task.id] = newTask
    } else {
      const newTask = {id: task.id, name: task.name, isActive: true}
      newTasks[task.id] = newTask
    }
    setTasks(newTasks)
  };

  const handleDelete = () => {
    const newTasks = tasks.filter((deleted) => deleted !== task)
    setTasks(newTasks)
  }

  return (
    <div class="taskdisplay__task">
      <button onClick={handleClick} className={task.isActive ? "none" : "todo"}>
        {!task.isActive && <img id="check" src={iconCheck} alt="task done"/>}
      </button>
      {!task.isActive ? (
        <del>
          <span className="task__text task__text--crossed">{task.name}</span>
        </del>
      ) : (
        <span className="task__text">{task.name}</span>
      )}
      <img className="task__delete" onClick={handleDelete} src={iconCross} alt="delete task" />
    </div>
  );

  // return (
  //   <div class="taskdisplay__task">
  //     <button onClick={handleClick} className={task.isActive ? "none" : "todo"}>
  //       <img id="check" src={iconCheck} alt="task done" />
  //     </button>
  //     <span className="task__text">{task.name}</span>
  //     <img className="task__delete" onClick={handleDelete} src={iconCross} alt="delete task" />
  //   </div>
  // );
};

const TasksDisplay = ({ tasks, setTasks, mode }) => {
  const visibleTasks = useMemo(() => filterTasks(tasks, mode), [tasks, mode])  

  return (
    <section className="taskdisplay">
      {visibleTasks.map((task) => {
        return (
          <Task key={task.id} task={task} setTasks={setTasks} tasks={tasks} />
        );
      })}
    </section>
  );
};

export { TasksDisplay };
