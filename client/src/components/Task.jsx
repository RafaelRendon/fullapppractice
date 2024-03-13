import { useState, useEffect } from "react";
import axios from "axios";

const Task = ({ status, id, task, call }) => {
  const [newStatus, setNewStatus] = useState(status);
  const [newTask, setNewTask] = useState(task);
  const [edit, setEdit] = useState(false);

  useEffect(() => {
    const change = async () => {
      await axios.put(`http://localhost:8000/notes/${id}`, {
        status: newStatus,
        task: newTask,
      });
    };
    change();
    call((prevState) => !prevState);
  }, [newStatus, edit]);

  return (
    <>
      <div className="task">
        {edit ? (
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
        ) : (
          <p>{task}</p>
        )}
        <input
          id={id}
          type="checkbox"
          checked={newStatus}
          onChange={(e) => setNewStatus(e.target.checked)}
        />
        <button onClick={() => setEdit(!edit)}>Edit</button>
      </div>
    </>
  );
};

export default Task;
