import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const {
      onReset,
      counters,
      onDelete,
      onIncrement,
      onDecrement,
    } = this.props;
    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm m2">
          Reset
        </button>
        {counters.map((counter) => (
          <Counter
            key={counter.id} // key attribute is used internally by react
            onDelete={onDelete}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            counter={counter}
          ></Counter>
        ))}
      </div>
    );
  }

  // handleIncrement = (counter) => {
  //   const counters = [...this.state.counters]; // ... operator is used to clone the array (so the state array is not modified)
  //   const index = counters.indexOf(counter);
  //   counters[index] = { ...counter }; // clone the counter
  //   counters[index].value++;
  //   this.setState({ counters });
  // };

  // handleDecrement = (counter) => {
  //   const counters = [...this.state.counters]; // ... operator is used to clone the array (so the state array is not modified)
  //   const index = counters.indexOf(counter);
  //   counters[index] = { ...counter }; // clone the counter
  //   counters[index].value--;
  //   this.setState({ counters });
  // };

  // handleReset = () => {
  //   console.log("Handle Reset");
  //   const counters = this.state.counters.map((x) => {
  //     x.value = 0;
  //     return x;
  //   });
  //   this.setState({ counters });
  // };

  // handleDelete = (counterId) => {
  //   console.log("My Event handler called", counterId);
  //   this.setState({
  //     counters: this.state.counters.filter((x) => x.id !== counterId),
  //   });
  // };
}
export default Counters;
