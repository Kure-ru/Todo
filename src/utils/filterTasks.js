  export function filterTasks(tasks, mode) {

    return tasks.filter(task => {
      if (mode === 'all') {
        return true;
      } else if (mode === 'active') {
        return task.isActive;
      } else if (mode === 'completed') {
        return !task.isActive;
      }
    });
  }
  