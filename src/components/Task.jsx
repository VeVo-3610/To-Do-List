import React from "react";
import useTaskStore from "../store/useTaskStore";

const Task = ({ job: { id, task, isDone } }) => {
  const { removeTask, doneTask } = useTaskStore();

  const handleRemoveTaskBtn = () => {
    if (confirm("Are you sure to delete?")) {
      removeTask(id);
    }
  };

  const handleOnChange = () => {
    doneTask(id);
  };
  return (
    <div className="flex mb-4 justify-center">
      <div className="border-2 border-slate-300 rounded-l-lg p-6 gap-10 w-[600px] flex items-center">
        <input
          onChange={handleOnChange}
          checked={isDone}
          className="size-4"
          type="checkbox"
        />
        <p className={isDone ? "line-through" : ""}>{task}</p>
      </div>
      <button
        onClick={handleRemoveTaskBtn}
        className="text-sm bg-red-100 border border-red-100 rounded-r-lg py-2 text-red-700 px-4"
      >
        Delete
      </button>
    </div>
  );
};

export default Task;
