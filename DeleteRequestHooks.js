import React, {useState, useEffect} from "react";

function DeleteRequestHooks() {
  const [status, setStatus] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1", {
      method: "DELETE",
    }).then(() => setStatus("deleted"));
  }, []);
  return (
    <div className="card text-center m-3">
      <h5 className="card-header">DELETE Request with React Hooks</h5>
      <div className="card-body">Status: {status}</div>
    </div>
  );
}

export default DeleteRequestHooks;
