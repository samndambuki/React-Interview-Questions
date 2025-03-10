import { Component } from "react";

//creating a class component that extends react component

class ClassCounter extends Component {
  constructor() {
    //sets up the component inheritance
    super();
    //initialize the state in constructor with a count of 0
    this.state = { count: 0 };
  }
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    return (
      <div>
        <h2>Class counter : {this.state.count}</h2>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default ClassCounter;
