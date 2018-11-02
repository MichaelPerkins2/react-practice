import React, { Component } from 'react';
import Ninjas from './Ninjas';
import AddNinja from'./AddNinja';

class App extends Component {
  state = {
    ninjas : [
      { name: 'Jack', age: 20, belt: 'white', id: 1 },
      { name: 'Max', age: 25, belt: 'black', id: 2 },
      { name: 'Gary', age: 32, belt: 'green', id: 3 }
    ]
  }
  addNinja = (ninja) => {
    ninja.id = Math.random();
    let ninjas = [...this.state.ninjas, ninja];
    this.setState({
      ninjas: ninjas
    })
  }
  deleteNinja = (id) => {
    let ninjas = this.state.ninjas.filter(ninja => {
      return ninja.id !== id
    });
    this.setState({
      ninjas: ninjas
    })
  }
  render() {
    return (
      <div className="App">
        <h1>React Practice</h1>
        <p>Ninja React & Redux Tutorial</p>
        <Ninjas deleteNinja={this.deleteNinja} ninjas={this.state.ninjas}/>
        <AddNinja addNinja={this.addNinja} />
      </div>
    );
  }
}

export default App;
