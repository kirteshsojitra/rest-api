import React from "react";

class PostRequest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
    };
  }

  componentDidMount() {
    const requestOptions = {
      method: "POST",
      header: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({title: "This is react application."}),
    };
    fetch("https://reqres.in/api/posts", requestOptions)
      .then((response) => response.json())
      .then((data) => this.setState({id: data.id}));
  }

  render() {
    return (
      <div className="card text-center m-3">
        <h5 className="card-header">Simple POST Request</h5>
        <div className="card-body">Returned Id: {this.state.id}</div>
      </div>
    );
  }
}

export default PostRequest;
