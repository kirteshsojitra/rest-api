import React from "react";

class PutRequest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
    };
  }

  componentDidMount() {
    const requestOptions = {
      method: "PUT",
      header: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({title: "This ia a react application."}),
    };
    fetch("https://jsonplaceholder.typicode.com/posts/1", requestOptions)
      .then((response) => response.json())
      .then((data) => this.setState({id: data.id}));
  }
  render() {
    const {postId} = this.state;
    return (
      <div className="card text-center m-3">
        <h5 className="card-header">Simple PUT Request</h5>
        <div className="card-body">Returned Id: {this.state.id}</div>
      </div>
    );
  }
}

export default PutRequest;
