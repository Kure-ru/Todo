import { TodoInput } from "./components/TodoInput";
import { TasksDisplay } from "./components/TasksDisplay";
import { TaskBar } from "./components/TaskBar";
import { DarkMode } from "./components/DarkMode";
import { TodoProvider } from "./context/taskContext";

import "./DarkMode.css";

function App() {

  return (
    <>
      <div className="background__image"></div>
      <section class="app__header">
        <div class="header__top">
          <h1 class="top__title">TODO</h1>
          <DarkMode />
        </div>
      </section>
      <TodoProvider>
      <div className="app__wrapper">
        <TodoInput tasks={TodoProvider.tasks} setTasks={TodoProvider.setTasks} />
        
        <TasksDisplay tasks={TodoProvider.tasks} setTasks={TodoProvider.setTasks} mode={TodoProvider.mode} />
    
        <TaskBar
          tasks={TodoProvider.tasks}
          setTasks={TodoProvider.setTasks}
          mode={TodoProvider.mode}
          setMode={TodoProvider.setMode}
        />
      </div>
      </TodoProvider>
      <p className="app__bottom__text">Drag and drop to reorder list</p>
    </>
  );
}

export default App;
