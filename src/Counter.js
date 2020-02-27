import React from "react";

class Counter extends React.Component {
  state = {
    number: 0
  };

  increment = () => {
    this.setState({
      number: this.state.number + 1
    });
  };

  displayNumber() {
    let color = "black";
    if (this.state.number % 2 === 0) {
      color = "green";
    }
    return <span style={{ color }}>{this.state.number}</span>;
  }

  normalRender() {
    return <React.Fragment>{this.state.number}</React.Fragment>;
  }

  render() {
    return (
      <React.Fragment>
        {this.displayNumber()}
        <div>
          <button onClick={this.increment}>Increase</button>
          <button
            onClick={() => {
              alert("Did you call me?");
            }}
          >
            Call
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default Counter;
