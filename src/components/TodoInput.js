import { useState } from "react";

let nextId = 0;

function TodoInput({ tasks, setTasks }) {
  const [input, setInput] = useState("");

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && input !== '') {
      console.log(input)
      setTasks([...tasks, { id: nextId++, name: input, isActive: true }]);
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
