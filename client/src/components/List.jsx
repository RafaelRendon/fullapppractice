import { useEffect, useState } from "react";
import axios from "axios";
import Task from "./Task";

const List = () => {
  const [tasks, setTasks] = useState([]);
  const [call, setcall] = useState(true);
  useEffect(() => {
    const call = async () => {
      const tasksApi = await axios.get("http://localhost:8000/notes");
      setTasks(tasksApi.data.tasks);
    };

    call();
  }, [call]);

  return (
    <>
      {tasks.map((task) => (
        <Task
          task={task?.task}
          status={task?.status}
          id={task?._id}
          key={task?._id}
          call={setcall}
        />
      ))}
    </>
  );
};

export default List;
