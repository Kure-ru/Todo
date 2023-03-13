import { useState } from "react";
import iconMoon from "./assets/icon-moon.svg";

import { TodoInput } from "./components/TodoInput";
import { TasksDisplay } from "./components/TasksDisplay";

import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);

  return (
    <>
      <section class="app__header">
        <div class="header__top">
          <h1 class="top__title">TODO</h1>
          <div class="top__icon">
            <img src={iconMoon} alt="moon indicating night mode button" />
          </div>
        </div>
        <TodoInput tasks={tasks} setTasks={setTasks} />
      </section>

      <TasksDisplay tasks={tasks} setTasks={setTasks} />

      <section class="app__bottom">
        <div>{tasks.length} items left</div>

        <ul class="items__status">
          <li>All</li>
          <li>Active</li>
          <li>Complete</li>
        </ul>

        <div>Clear completed</div>
      </section>

      <p>Drag and drop to reorder list</p>
    </>
  );
}

export default App;
