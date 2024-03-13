import React, { useState } from "react";
import axios from "axios";

const Form = () => {
  const [task, setTask] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8000/notes", { task });
  };
  return (
    <>
      <form className="frmcreate" onSubmit={handleSubmit}>
        <input
          id="inputTask"
          type="text"
          onChange={(e) => setTask(e.target.value)}
          value={task}
          // required
        />
        <button type="submit">Crear</button>
      </form>
    </>
  );
};

export default Form;
