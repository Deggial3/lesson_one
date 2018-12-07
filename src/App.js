import React, { Component } from 'react';
import './App.css';
import Car from './Car/Car';

class App extends Component {

    state = {
        cars: [
            {name: 'Ford', year: 2019},
            {name: 'MacLaren', year: 2009},
            {name: 'Fiat', year: 2090}
        ],
        pageTitle: 'I feel your changes'
    }

    changeTitleHandler = () => {
      let oldState = this.state.pageTitle
      let newState = oldState + '(Changed)'
        this.setState({
            pageTitle: newState
        })

    }

  render() {
      const divStyle = {
      'textAlign': 'center'
      }
      const cars = this.state.cars
    return (
      <div style = {divStyle}>
          <h1>{this.state.pageTitle}</h1>
        <button onClick={this.changeTitleHandler}>Change title</button>
          <Car name={cars[0].name} year={cars[0].year} />
          <Car name={cars[1].name} year={cars[1].year} />
          <Car name={cars[2].name} year={cars[2].year} />
      </div>
    )
  }
}

export default App;
