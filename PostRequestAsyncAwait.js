import React from "react";

class PostRequestAsyncAwait extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
    };
  }

  async componentDidMount() {
    const requestOptions = {
      method: "POST",
      header: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({title: "This is a react application"}),
    };
    const response = await fetch("https://reqres.in/api/posts", requestOptions);
    const data = await response.json();
    this.setState({id: data.id});
  }

  render() {
    const {postId} = this.state;
    return (
      <div className="card text-center m-3">
        <h5 className="card-header">POST Request with Async/Await</h5>
        <div className="card-body">Returned Id: {this.state.id}</div>
      </div>
    );
  }
}

export default PostRequestAsyncAwait;
