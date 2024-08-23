import React, { useContext, useState } from "react";
import useTaskStore from "../store/useTaskStore";

const CreateTask = () => {
  const [job, setJob] = useState("");

  const { addTask } = useTaskStore();

  const handleOnChange = (event) => {
    setJob(event.target.value);
  };

  const handleAddTaskBtn = () => {
    const newTask = {
      id: Date.now(),
      task: job,
      isDone: false,
    };
    addTask(newTask);
    setJob("");
  };

  return (
    <div className="flex mb-5 mx-10 justify-center ">
      <input
        onChange={handleOnChange}
        value={job}
        className=" border-2 border-slate-300 rounded-l-lg p-6  w-[600px]"
        type="text"
        placeholder="Write your task"
      />
      <button
        onClick={handleAddTaskBtn}
        className="bg-slate-300 border-2 border-slate-300  rounded-r-lg py-2 px-4"
      >
        Add Task
      </button>
    </div>
  );
};

export default CreateTask;
