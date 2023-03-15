const TaskBar = ({ tasks, setTasks, mode, setMode }) => {

  const handleDeleteCompleted = () => {
    setTasks((current) => current.filter((task) => task.isActive === true));
  };

  return (
    <section class="app__bottom">
      <div>{tasks.length} items left</div>

      <ul class="items__status">
        <li> <button onClick={() => setMode('all')}>
          <span className={mode === 'all' ? "selected" : ""}>All</span>
          </button></li>
        <li> <button onClick={() => setMode('active')}>
          <span　className={mode === 'active' ? "selected" : ""}>Active</span>
          </button></li>
        <li> <button onClick={() => setMode('completed')}>
          <span　className={mode === 'completed' ? "selected" : ""}>Completed</span>
          </button></li>
      </ul>

      <div className="clear__btn" onClick={handleDeleteCompleted}>Clear completed</div>
    </section>
  );
};


export { TaskBar };
