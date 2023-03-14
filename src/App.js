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
      <section class="app__header">
        <div class="header__top">
          <h1 class="top__title">TODO</h1>
          <DarkMode/>
        </div>
        <TodoInput tasks={tasks} setTasks={setTasks} />
      </section>

      <TasksDisplay tasks={tasks} setTasks={setTasks} mode={mode} />

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
