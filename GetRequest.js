import React from "react";

class GetRequest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalRequestPackages: null,
    };
  }

  componentDidMount() {
    fetch("https://api.npms.io/v2/search?q=react")
      .then((response) => response.json())
      .then((data) => this.setState({totalRequestPackages: data.total}));
  }

  render() {
    return (
      <div className="card text-center m-3">
        <h5 className="card-header">Simple GET Request</h5>
        <div className="card-body">
          Total react packages: {this.state.totalRequestPackages}
        </div>
      </div>
    );
  }
}

export default GetRequest;
