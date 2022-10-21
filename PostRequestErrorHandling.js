import React from "react";

class PostRequestErrorHandling extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errorMessage: null,
    };
  }

  componentDidMount() {
    const requestOptions = {
      method: "POST",
      header: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({title: "This is a react application."}),
    };
    fetch("https://reqres.in/invalid-url", requestOptions)
      .then(async (response) => {
        const isJSON = response.headers
          .get("Content-Type")
          ?.includes("appliaction/json");
        const data = isJSON && (await response.json());

        if (!response.ok) {
          const error = (data && data.message) || response.status;
          return Promise.reject(error);
        }
      })
      .catch((error) => this.setState({errorMessage: error.toString()}));
  }
  render() {
    return (
      <div className="card text-center m-3">
        <h5 className="card-header">POST Request with Error Handling</h5>
        <div className="card-body">Error: {this.state.errorMessage}</div>
      </div>
    );
  }
}

export default PostRequestErrorHandling;
