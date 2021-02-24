import React, { Component } from "react";

class Counter extends Component {
  //local state reference removed - this is a controlled component

  //lifecycle hooks
  componentDidUpdate(prevProps, prevState) {
    console.log("prev props: ", prevProps);
    console.log("prev state: ", prevState);
    // if (prevProps.counter.value !== this.props.prevState.value) {
    //   // can be used to ajax call to the server if there has been a change
    // }
  }
  componentWillUnmount() {
    console.log("counter will unmount");
    //this provides an opporunity to do code clean up, release memory resources, just before the component
    //is removed from the DOM
  }

  render() {
    console.log("counter - render");
    const { counter, onDelete, onIncrement, onDecrement } = this.props;
    //console.log("props", this.props);

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
