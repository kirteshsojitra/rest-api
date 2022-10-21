import React, {useState, useEffect} from "react";

function PutRequestHooks() {
  const [postId, setPostId] = useState(null);

  useEffect(() => {
    const requestOptions = {
      method: "PUT",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({title: "React Hooks PUT Request Example"}),
    };
    fetch("https://jsonplaceholder.typicode.com/posts/1", requestOptions)
      .then((response) => response.json())
      .then((data) => setPostId(data.id));
  }, []);

  return (
    <div className="card text-center m-3">
      <h5 className="card-header">PUT Request with React Hooks</h5>
      <div className="card-body">Returned Id: {postId}</div>
    </div>
  );
}

export default PutRequestHooks;
