import { useState } from "react";
// import { Button } from './Button';

let nextId = 0;

function TodoInput({ tasks, setTasks }) {
  const [input, setInput] = useState("");

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      setTasks([...tasks, { id: nextId++, name: input, isActive: true }]);
      setInput("")
    }
  };

  return (
    <div class="header__input">
      {/* <Button/> */}
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
