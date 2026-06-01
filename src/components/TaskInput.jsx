import { useState } from "react";

function TaskInput({ onAdd }) {
  const [text, setText] = useState("");

  function handleSubmit() {
    if (text.trim() === "") return;
    onAdd(text.trim());
    setText("");
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") handleSubmit();
  }

  return (
    <div className="task-input-wrapper">
      <input
        className="task-input"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="  add new task ... "
      />
      <button className="btn-add" onClick={handleSubmit}> add</button>
    </div>
  );
}

export default TaskInput;
