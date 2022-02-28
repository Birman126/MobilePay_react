import React, { Component } from "react";
import "./App.css";
import Operator from "./Operator/Operator.js";
import Terminal from './Terminal/Terminal.js'

class App extends Component {
  state = {
    operator: [
      { name: "Beline" },
      { name: "Megafon" },
      { name: "Tele2" }
              ],
    pageTitle: "Выберите оператора",
    showOperator: false,
    showTerminal: false,
  };
  toggleOperatorHandler = () => {
    this.setState({
      showOperator: !this.state.showOperator,
    });
  };
  changeTitleHandler = (pageTitle) => {
    this.setState({
      pageTitle,
      showOperator: !this.state.showOperator,
      showTerminal: !this.state.showTerminal,
    });
  };



  render() {
    const divStyle = {
      textAlign: "center",
    };
    let terminal = null;
    if (this.state.showTerminal) {
      
        return (<Terminal />)
    };
  
    let operators = null;
    if (this.state.showOperator) {
      operators = this.state.operator.map((operator, index) => {
        return (
          <Operator
            key={index}
            name={operator.name}
            onChangeTitle={() => this.changeTitleHandler(operator.name)}
          />
        );
      });
    }
    return (
      <div style={divStyle}>
        <h1>{this.state.pageTitle}</h1>

        
        <button
        style={{marginTop:2}} 
        onClick={this.toggleOperatorHandler}
        >Выбрать</button>

        <div
          style={{
            width: "400px",
            margin: "auto",
            paddingTop: "20px",
          }}
        >
          {terminal,
          operators}
        </div>
      </div>
    );
  }
}

export default App;
