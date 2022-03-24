import React from "react";

class CComponent extends React.Component {
  state = {
    message: "Class Component",
    time: new Date().toString(),
  };

  componentDidMount() {
    console.log("I'm from did Mount method");
    this.interval = setInterval(this.showDate, 1000);
  }

  componentDidUpdate() {
    console.log("I'm from update");
  }

  componentWillUnmount() {
    console.log("I'm from unmount");
    clearInterval(this.interval);
  }
  showDate = () => {
    this.setState({
      time: new Date().toString(),
    });
  };

  render() {
    return (
      <div>
        {this.state.message}
        <div>{this.state.time}</div>
      </div>
    );
  }
}

export default CComponent;
