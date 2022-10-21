import React, {useState, useEffect} from "react";

function DeleteRequestAsyncAwait() {
  const [status, setStatus] = useState(null);

  useEffect(() => {
    async function deletePost() {
      await fetch("https://jsonplaceholder.typicode.com/posts/1", {
        method: "DELETE",
      }).then(() => setStatus("DELETED!"));
    }
    deletePost();
  }, []);

  return (
    <div className="card text-center m-3">
      <h5 className="card-header">DELETE Request with Async/Await</h5>
      <div className="card-body">Status: {status}</div>
    </div>
  );
}

export default DeleteRequestAsyncAwait;
