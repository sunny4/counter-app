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
    const { counter, onDelete, onIncrement, onDecrement } = this.props;
    console.log("props", this.props);

    return (
      <div>
        <span className={this.GetBadgeClasses(counter)}>
          {this.FormatCount(counter)}
        </span>
        <button
          onClick={() => onIncrement(counter)}
          className="btn btn-secondary btn-sm m-2"
        >
          +
        </button>
        <button
          onClick={() => onDecrement(counter)}
          className="btn btn-secondary btn-sm m-2"
          disabled={counter.value <= 0}
        >
          -
        </button>
        <button
          onClick={() => onDelete(counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  FormatCount(counter) {
    return counter.value === 0 ? "Zero" : counter.value;
  }

  GetBadgeClasses(counter) {
    return counter.value === 0
      ? "badge m-2 badge-warning"
      : "badge m-2 badge-primary";
  }
}

export default Counter;
