import { useState, useContext } from "react";
import taskContext from "../context/taskContext";

function TodoInput({ tasks, setTasks }) {
  const [input, setInput] = useState("");
  const { addTask } = useContext(taskContext)

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && input !== '') {
      console.log(input)
      addTask({
        id: new Date().getTime().toString(),
        name: input,
        isActive: true,
      })
      setInput("")
    }
  };

  return (
    <div class="header__input">
      <input
        class="input__txt"
        type="text"
        placeholder="Create a new todo..."
        value={input}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
}

export { TodoInput };
