import React, {useState, useEffect} from "react";

function PutRequestAsyncAwait() {
  const [postId, setPostId] = useState(null);

  useEffect(() => {
    async function updatePost() {
      const requestOptions = {
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({title: "React Hooks PUT Request Example"}),
      };
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts/1",
        requestOptions
      );
      const data = await response.json();
      setPostId(data.id);
    }

    updatePost();
  }, []);

  return (
    <div className="card text-center m-3">
      <h5 className="card-header">PUT Request with Async/Await</h5>
      <div className="card-body">Returned Id: {postId}</div>
    </div>
  );
}

export default PutRequestAsyncAwait;
