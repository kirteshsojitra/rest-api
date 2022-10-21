import React, {useState, useEffect} from "react";

function DeleteRequestErrorHandling() {
  const [errorMessage, setErrorMessage] = useState(null);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/invalid-url", {
      method: "DELETE",
    })
      .then(async (response) => {
        const data = await response.json();
        if (!response.ok) {
          const error = (data && data.message) || response.status;
          return Promise.reject(error);
        }
      })
      .catch((error) => setErrorMessage("error is detected.", error));
  });
  return (
    <div className="card text-center m-3">
      <h5 className="card-header">DELETE Request with Error Handling</h5>
      <div className="card-body">Error: {errorMessage}</div>
    </div>
  );
}

export default DeleteRequestErrorHandling;
