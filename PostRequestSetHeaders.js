import React from "react";

class PostRequestSetHeaders extends React.Component {
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
      body: JSON.stringify({title: "This is a react application."}),
    };
    fetch("https://reqres.in/api/posts", requestOptions)
      .then((response) => response.json())
      .then((data) => this.setState({id: data.id}));
  }

  render() {
    const {postId} = this.state;
    return (
      <div className="card text-center m-3">
        <h5 className="card-header">POST Request with Set Headers</h5>
        <div className="card-body">returned Id: {this.state.id}</div>
      </div>
    );
  }
}

export default PostRequestSetHeaders;
