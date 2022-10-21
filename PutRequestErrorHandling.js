import React, {useState, useEffect} from "react";

function PutRequestErrorHandling() {
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    const requestOptions = {
      method: "PUT",
      header: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({title: "This is a react appliaction."}),
    };
    fetch("https://jsonplaceholder.typicode.com/invalid-url", requestOptions)
      .then(async (response) => {
        const data = await response.json();

        if (!response.ok) {
          const error = (data && data.message) || response.status;
          return Promise.reject(error);
        }
      })
      .catch((error) => setErrorMessage(error));
  }, []);

  return (
    <div className="card text-center m-3">
      <h5 className="card-header">PUT Request with Error Handling</h5>
      <div className="card-body">Error: {errorMessage}</div>
    </div>
  );
}

export default PutRequestErrorHandling;
