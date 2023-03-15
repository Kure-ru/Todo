import { useState } from "react";

import { TodoInput } from "./components/TodoInput";
import { TasksDisplay } from "./components/TasksDisplay";
import { TaskBar } from "./components/TaskBar";
import { DarkMode } from "./components/DarkMode";

import "./DarkMode.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [mode, setMode] = useState("all");

  return (
    <>
      <div className="background__image"></div>
      <section class="app__header">
        <div class="header__top">
          <h1 class="top__title">TODO</h1>
          <DarkMode />
        </div>
      </section>
      <div className="app__wrapper">
        <TodoInput tasks={tasks} setTasks={setTasks} />

        <TasksDisplay tasks={tasks} setTasks={setTasks} mode={mode} />

        <TaskBar
          tasks={tasks}
          setTasks={setTasks}
          mode={mode}
          setMode={setMode}
        />
      </div>
      <p className="app__bottom__text">Drag and drop to reorder list</p>
    </>
  );
}

export default App;
