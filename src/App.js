import React, { Component } from 'react';
import './css/App.css';
import Button from './Button';
import Display from './Display';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "0",
      current: "0",
      aggr: "0",
      operatorFlag: false,
      operator: ""
    }
  }
  addNum = (name) => {
    if (this.state.operatorFlag) {this.state.current = ""};

    let current = this.state.current;
    (current === "0" && name !== ".") ? current = name : current += name;
    this.setState({current});
    this.setState({operatorFlag: false});
  }
  addDecimal = (name) => {
    if (this.state.current.indexOf(".") === -1) {
      this.addNum(name);
    }
  }
  clearDisplay = () => {
    this.setState({display: "0"});
    this.setState({current: "0"});
    this.setState({aggr: "0"});
    this.setState({operatorFlag: false});
    this.setState({operator: ""});
  }

  addOperator = (name) => {
    let current = Number.parseFloat(this.state.current);
    let aggr = Number.parseFloat(this.state.aggr);
    let display = this.state.display;
    
    // when one operator is clicked after another
    if (this.state.operatorFlag && display.length > 0 && this.state.operator === "=") {
      const tempDisp = display.slice(0, display.length-1);
      display = tempDisp + name;
    } else {
      switch(this.state.operator) {
        case "+": aggr += current; break;
        case "-": aggr -= current; break;
        case "*": aggr *= current; break;
        case "/": aggr /= current; break;
        case "=": break;
        default: aggr = current; break;
      }
      
/*       (current === 0 && name !== "/" && name !== "*") ?
      display = name : */
      // when there's only zero digit displayed
      (display === "0" && name !== ".") ? 
      display = current + name :
      display += current + name;
    }
    this.setState({operator: name});
    this.setState({operatorFlag: true});
    this.setState({aggr})

    // when equals sign is clicked
    if (name !== "=") {
      this.setState({display})
      return
    } else {
      this.setState({display: aggr});
    };
  }

  render() {
    return (
      <div id="container">
        <div id="wrapper">
          <div id="state">
            aggr: {this.state.aggr} <br />
            display: {this.state.display} <br />
            current: {this.state.current} <br />
            operatorFlag: {this.state.operatorFlag.toString()} <br />
            operator: {this.state.operator}
          </div>
          <Display
            display={this.state.display}
            current={this.state.current}
            aggr={this.state.aggr}/>
      
          <div id="numpad">
            <Button id="zero" name="0" handleClick={this.addNum} />
            <Button id="one" name="1" handleClick={this.addNum} />
            <Button id="two" name="2" handleClick={this.addNum} />
            <Button id="three" name="3" handleClick={this.addNum} />
            <Button id="four" name="4" handleClick={this.addNum} />
            <Button id="five" name="5" handleClick={this.addNum} />
            <Button id="six" name="6" handleClick={this.addNum} />
            <Button id="seven" name="7" handleClick={this.addNum} />
            <Button id="eight" name="8" handleClick={this.addNum} />
            <Button id="nine" name="9" handleClick={this.addNum} />
            <Button id="decimal" name="." handleClick={this.addDecimal} />
            <Button id="clear" name="AC" handleClick={this.clearDisplay} />
            <Button id="add" name="+" handleClick={this.addOperator} />
            <Button id="subtract" name="-" handleClick={this.addOperator} />
            <Button id="multiply" name="*" handleClick={this.addOperator} />
            <Button id="divide" name="/" handleClick={this.addOperator} />
            <Button id="equals" name="=" handleClick={this.addOperator} />
          </div>
        </div>
      </div>
    )
  }
}





export default App;