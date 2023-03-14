import { useState } from "react";
import iconMoon from "./assets/icon-moon.svg";

import { TodoInput } from "./components/TodoInput";
import { TasksDisplay } from "./components/TasksDisplay";
import { TaskBar } from "./components/TaskBar";

import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [mode, setMode] = useState("all");

  console.log(mode);
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

      <TaskBar
        tasks={tasks}
        setTasks={setTasks}
        mode={mode}
        setMode={setMode}
      />

      <p className="app__bottom__text">Drag and drop to reorder list</p>
    </>
  );
}

export default App;
