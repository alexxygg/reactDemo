//needed for class
import React from "react";

class Counter extends React.Component {
  static defaultProps = {
    startAt: 0,
    countBy: 1,
  };

  //If we needed validation
  // static propTypes ={}

  constructor(props) {
    super(props);

    //object where state is stored, default
    this.state = {
      counter: props.startAt,
    };
    //To prevent this being undefined
    this.countUp = this.countUp.bind(this);
    this.countDown = this.countDown.bind(this);
  }
  // /Our methods
  countUp(e) {
    // console.log(e);
    // setCounter(counter + props.countBy);
    this.setState({ counter: this.state.counter + this.props.countBy });
  }
  countDown() {
    // setCounter(counter - props.countBy);
    this.setState({ counter: this.state.counter - this.props.countBy });
  }
  //To have it render
  render() {
    return (
      <>
        <p>Start At: {this.props.startAt}</p>
        <p>Count By: {this.props.countBy}</p>
        <h4>Counter: {this.state.counter}</h4>
        {/* //Events are camelCased */}
        <button className="btn btn-primary" onClick={this.countUp}>
          Count Up
        </button>
        <button className="btn btn-danger" onClick={this.countDown}>
          Count Down
        </button>
      </>
    );
  }
}

export default Counter;
