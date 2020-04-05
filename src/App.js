import React, { Component } from 'react'
import Calculator from './components/Calculator'

export default class App extends Component {
  render() {
    let arrayCalculator = []
    for (let i = 0; i< 100; i++) {
        arrayCalculator.push(<Calculator key={i} />)
    }
    return (
      <div className="app">
          {arrayCalculator}
      </div>
    )
  }
}