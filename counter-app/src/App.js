import React, {Component} from 'react';
import Navbar from '../src/components/navbar'
import Counters from '../src/components/counters';
import './App.css';

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 1 },
      { id: 2, value: 2 },
      { id: 3, value: 3 },
    ],
  };

  styles = {
    marginRight: '50px' 
  }

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });

    this.setState({
      counters: counters,
    });
  };

  handleDelete = (counterId) => {
    const counter = this.state.counters.filter(
      (idToFilterOn) => counterId !== idToFilterOn.id
    );
    this.setState({
      counters: counter,
    });
  };

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    // counters[index] = { ...counter };
    console.log('counters index', counters[index])
    counters[index].value++;
    this.setState({
      counters,
    });
  };

  handleDecrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index].value--;
    this.setState({
      counters
    })
  }

  render() {
    return (
      <React.Fragment>
        <Navbar  totalCounters = {this.state.counters.filter(c => c.value !== 0).length} />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
            onDecrement={this.handleDecrement}
          
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
