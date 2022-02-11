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
changeTitleHandler = (newTitle) => {
  this.setState({
    pageTitle: newTitle
  })
}

handleInput = (event) => {
  console.log('Изменено!!!!!!!', event.target.value)
  this.setState ({
    pageTitle: event.target.value
  })
}
  render() {
    const divStyle = {
      textAlign: 'center'
    }

    

    return (
      <div style={divStyle}>
        <h1>{this.state.pageTitle}</h1>

        <input type = 'text' onChange={this.handleInput} />

        <button onClick ={this.changeTitleHandler.bind(this, 'Изменено!!!')}>Выбрать</button>
        { this.state.operator.map((operator, index)=>{
          return (
            <Operator 
            key ={index}
            name ={ operator.name}
            onChangeTitle ={()=> this.changeTitleHandler(operator.name)}
            />
          )
        }) }
      </div>
    );
  }
}

export default App;