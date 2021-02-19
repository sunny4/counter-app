import React, { Component } from "react";

class Counter extends Component {
  //local state reference removed - this is a controlled component

  handleDecrement = () => {
    // console.log(product);
    if (this.state.value > 0) {
      this.setState({ value: this.state.value - 1 });
    }
  };

  render() {
    console.log("props", this.props);

    return (
      <div>
        <span className={this.GetBadgeClasses()}>{this.FormatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm m-2"
        >
          +
        </button>
        <button
          onClick={() => this.props.onDecrement(this.props.counter)}
          className="btn btn-secondary btn-sm m-2"
          disabled={this.props.counter.value <= 0}
        >
          -
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  FormatCount() {
    return this.props.counter.value === 0 ? "Zero" : this.props.counter.value;
  }

  GetBadgeClasses() {
    return this.props.counter.value === 0
      ? "badge m-2 badge-warning"
      : "badge m-2 badge-primary";
  }
}

export default Counter;
