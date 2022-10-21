import React from "react";

class GetRequestErrorHandling extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errorMessage: null,
    };
  }

  componentDidMount() {
    fetch("https://api.npms.io/v2/invalid-url")
      .then(async (response) => {
        const data = await response.json();

        if (response.ok === false) {
          const error = (data && data.message) || response.statusText;
          return Promise.reject(error);
        }
      })
      .catch((error) => {
        this.setState({errorMessage: error});
        console.error("Error: ", error);
      });
  }

  render() {
    return (
      <div className="card text-center m-3">
        <h5 className="card-header">GET Request with Error Handling</h5>
        <div className="card-body">
          Error message: {this.state.errorMessage}
        </div>
      </div>
    );
  }
}

export default GetRequestErrorHandling;
