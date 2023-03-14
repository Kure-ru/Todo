import { useState } from 'react';
import { filterTasks } from "../utils/filterTasks";

const TaskBar = ({ tasks, setTasks, mode, setMode }) => {

  const handleDeleteCompleted = () => {
    setTasks((current) => current.filter((task) => task.isActive === true));
  };

  return (
    <section class="app__bottom">
      <div>{tasks.length} items left</div>

      <ul class="items__status">
        <li> <button onClick={() => setMode('all')}>All</button></li>
        <li> <button onClick={() => setMode('active')}>Active</button></li>
        <li> <button onClick={() => setMode('completed')}>Complete</button></li>
      </ul>

      <div onClick={handleDeleteCompleted}>Clear completed</div>
    </section>
  );
};

export { TaskBar };
