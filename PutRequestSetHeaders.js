import React, {useState, useEffect} from "react";

function PutRequestSetHeaders() {
  const [postId, setPostId] = useState(null);

  useEffect(() => {
    const requestOptions = {
      method: "PUT",
      header: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({title: "This ia a react application."}),
    };
    fetch("https://jsonplaceholder.typicode.com/posts/1", requestOptions)
      .then((response) => response.json())
      .then((data) => setPostId(data.id));
  });
  return (
    <div className="card text-center m-3">
      <h5 className="card-header">PUT Request with Set Headers</h5>
      <div className="card-body">Returned Id: {postId}</div>
    </div>
  );
}

export default PutRequestSetHeaders;
