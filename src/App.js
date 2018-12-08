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

    changeTitleHandler = (newTitle) => {

        this.setState({
            pageTitle: newTitle
        })
    }

  render() {
      const divStyle = {
      'textAlign': 'center'
      }
      //const cars = this.state.cars
    return (
      <div style = {divStyle}>
          <h1>{this.state.pageTitle}</h1>
        <button onClick={this.changeTitleHandler.bind(this, 'Changed!!!')}>Change title</button>
          {this.state.cars.map((car, index)=> {
              return(
                  <Car
                      key={index}
                      name={car.name}
                      year={car.year}
                      onChangeTitle={() => this.changeTitleHandler(car.name)}
                  />
              )
          })}
          {/*<Car name={cars[0].name} year={cars[0].year} />*/}
          {/*<Car name={cars[1].name} year={cars[1].year} />*/}
          {/*<Car name={cars[2].name} year={cars[2].year} />*/}
      </div>
    )
  }
}

export default App;
