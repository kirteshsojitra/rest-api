import React, {useState, useEffect} from "react";

function DeleteRequestSetHeaders() {
  const [status, setStatus] = useState(null);

  useEffect(() => {
    const requestOptions = {
      method: "DELETE",
      header: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({title: "This is a react application."}),
    };
    fetch("https://jsonplaceholder.typicode.com/posts/1", requestOptions).then(
      () => setStatus("Delete")
    );
  });
  return (
    <div className="card text-center m-3">
      <h5 className="card-header">DELETE Request with Set Headers</h5>
      <div className="card-body">Status: {status}</div>
    </div>
  );
}

export default DeleteRequestSetHeaders;
