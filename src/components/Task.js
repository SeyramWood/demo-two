import React from "react";

const Task = ({ task, deleteTask, updateTask, markCompletedTask }) => {
  const [state, setState] = React.useState(task.completed);

  const handleInputChange = (e) => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    setState(value);
    markCompletedTask(task.id, value);
  };
  React.useEffect(() => {}, [state]);
  return (
    <div className="task">
      <div className="item">
        <span className={`checkbox ${state && "completed"}`}>
          <input
            type="checkbox"
            name={task.id}
            id={task.id}
            checked={state}
            onChange={handleInputChange}
          />
          <label htmlFor={task.id}>{task.task}</label>
        </span>
      </div>
      <div className="buttons">
        <button onClick={() => updateTask(task.id)}>update</button>
        <button className="delete" onClick={() => deleteTask(task.id)}>
          delete
        </button>
      </div>
    </div>
  );
};

export default Task;
