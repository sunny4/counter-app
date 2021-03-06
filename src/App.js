
import React, { Component } from 'react';
import './App.css';
import NavBar from './components/navbar';
import Counters from './components/counters';

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  constructor() {
    super();
    console.log("App - Constructor");
    // the constructor is called before render method
  }
  componentDidMount() {
    console.log("App - Mounted");
    // when a component is mounted that means it's in the DOM, called after Render()
  }

  render() { 
    // the render method is called after the constructor method
    console.log('App - Rendered');
    return (     
    <React.Fragment>
      <NavBar totalCounters={this.state.counters.filter(x => x.value > 0).length}/>      
      <main className="container">
        <Counters
        counters={this.state.counters}
        onReset={this.handleReset}
        onIncrement={this.handleIncrement}
        onDecrement={this.handleDecrement}     
        onDelete={this.handleDelete}   
        />
      </main>      
    </React.Fragment>  );
  }

  handleIncrement = (counter) => {
    const counters = [...this.state.counters]; // ... operator is used to clone the array (so the state array is not modified)
    const index = counters.indexOf(counter);
    counters[index] = { ...counter }; // clone the counter
    counters[index].value++;
    this.setState({ counters });
  };

  handleDecrement = (counter) => {
    const counters = [...this.state.counters]; // ... operator is used to clone the array (so the state array is not modified)
    const index = counters.indexOf(counter);
    counters[index] = { ...counter }; // clone the counter
    counters[index].value--;
    this.setState({ counters });
  };

  handleReset = () => {
    console.log("Handle Reset");
    const counters = this.state.counters.map((x) => {
      x.value = 0;
      return x;
    });
    this.setState({ counters });
  };

  handleDelete = (counterId) => {
    console.log("My Event handler called", counterId);
    this.setState({
      counters: this.state.counters.filter((x) => x.id !== counterId),
    });
  };
}
 
export default App;

