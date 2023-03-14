  export function filterTasks(tasks, filter) {

    return tasks.filter(todo => {
      if (filter.mode === 'all') {
        return true;
      } else if (filter.mode === 'active') {
        return tasks.isActive;
      } else if (filter.mode === 'completed') {
        return !tasks.isActive;
      }
    });
  }
  