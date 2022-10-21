import React from "react";

class GetRequestSetHeaders extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalReactPackages: null,
    };
  }

  componentDidMount() {
    const header = {"Content-Type": "application/json"};
    fetch("https://api.npms.io/v2/search?q=react", {header})
      .then((response) => response.json())
      .then((data) => this.setState({totalReactPackages: data.total}));
  }

  render() {
    return (
      <div className="card text-center m-3">
        <h5 className="card-header">GET Request with Set Headers</h5>
        <div className="card-body">
          Total react packages: {this.state.totalReactPackages}
        </div>
      </div>
    );
  }
}

export default GetRequestSetHeaders;
