import React, { Component } from 'react';
import './App.css';
import Operator from './Operator/Operator.js';

class App extends Component {

  state = {
    operator: [
      {name: 'Beline'},
      {name: 'Megafon'},
      {name: 'Tele2'}
    ],
    pageTitle: 'Выберите оператора'
  }
changeTitleHandler () {
  console.log('click')
}
  render() {
    const divStyle = {
      textAlign: 'center'
    }

    const operator = this.state.operator

    return (
      <div style={divStyle}>
        <h1>{this.state.pageTitle}</h1>
        <button onClick ={this.changeTitleHandler}>Ololo</button>
        <Operator name={operator[0].name}  /> 
        <Operator name={operator[1].name}  />
        <Operator name={operator[2].name}  />
      </div>
    );
  }
}

export default App;