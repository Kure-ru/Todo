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
        <img src={iconCheck} alt="task done" />
      </button>
      {task.name}
      <img onClick={handleDelete} src={iconCross} alt="delete task" />
    </div>
  );
};

const TasksDisplay = ({ tasks, setTasks }) => {
  console.log(tasks)
  return (
    <section className="taskdisplay">
      {tasks.map((task) => {
        return (
          <Task key={task.id} task={task} setTasks={setTasks} tasks={tasks} />
        );
      })}
    </section>
  );
};

export { TasksDisplay };
