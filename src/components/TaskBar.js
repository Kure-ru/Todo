import { useContext } from "react";
import taskContext from "../context/taskContext";

const TaskBar = () => {
  const { tasks, setTasks, mode, setMode } = useContext(taskContext)
  const handleDeleteCompleted = () => setTasks((current) => current.filter((task) => task.isActive === true));

  console.log(mode)
  return (
    <div class="app__bottom">
      <div>{tasks.length} items left</div>

      <div class="items__status">
         <p onClick={() => setMode('all')} className={mode === 'all' ? "selected" : ""}>
          All
          </p>
         <p onClick={() => setMode('active')} className={mode === 'active' ? "selected" : ""}>
          Active
          </p>
         <p onClick={() => setMode('completed')} className={mode === 'completed' ? "selected" : ""}>
         Completed
          </p>
      </div>

      <div className="clear__btn" onClick={handleDeleteCompleted}>Clear completed</div>
    </div>
  );
};

export { TaskBar };
