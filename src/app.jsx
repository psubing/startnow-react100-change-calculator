import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amountDue: '',
      amountReceived: '',
      change: '',
      twenties: '',
      tens: '',
      fives: '',
      ones: '',
      quarters: '',
      dimes: '',
      nickels: '',
      dimes: '',
      pennies: ''
    }
    this.calculate = this.calculate.bind(this);
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value})
  }

  calculate(event) {
    event.preventDefault();
    const amountReceived = parseFloat(this.state.amountReceived);
    const amountDue = parseFloat(this.state.amountDue);
    const change = (amountReceived - amountDue).toFixed(2);
    const coins = (change - Math.trunc(change)).toFixed(2);
    const bills = change - coins;
    const twenties = Math.floor(bills / 20);
    const tens = Math.floor((bills % 20) / 10);
    const fives = Math.floor(((bills % 20) % 10) / 5);
    const ones = Math.floor(((bills % 20) % 10) %5);
    const quarters = Math.floor(coins / .25);
    const dimes = Math.floor(((coins % .25).toFixed(2)) / .1);
    const nickels = Math.floor(((((coins % .25).toFixed(2)) % .1).toFixed(2)) / .05);
    const pennies = Math.floor(((((((coins % .25).toFixed(2)) % .1).toFixed(2)) % .05).toFixed(2)) / .01);
    
    if (change > 0) {
      this.setState({
        change: change,
        twenties: twenties,
        tens: tens,
        fives: fives,
        quarters: quarters,
        ones: ones,
        dimes: dimes,
        nickels: nickels,
        pennies: pennies,
        outcome: 
        < div id="outcome" className="alert alert-success">
        The total change due is ${change}
      </div>
        })
      } else {
        this.setState({
          outcome: 
          <div id="outcome" className="alert alert-danger">
          Additional money owed.
          </div>
        })
      }
    }

  render() {
    return (
      <div>
      <head>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"/>
      </head>
        <div className="container">
          <h1 >
            <p className="text-white bg-dark">Change Calculator</p>
          </h1>
          <hr />
          <div className="row">
            <div className="col-sm-4">
              <div className="panel panel-default">
              <div className="panel-heading">
              <h4>Enter Information</h4>
              </div>
              <div className="panel-body">
                <div className="panel-due">
                How much is due?
                </div>
                <input name="amountDue" value={this.state.amountDue} onChange={this.handleChange} placehoder="0"/>
                <div className="panel-received">
                How much was received?
                </div>
                <input name="amountReceived" value={this.state.amountReceived} onChange={this.handleChange} placehoder="0"/>
                <div>
                  <button id="calculate-change" className="btn btn-primary" onClick={this.calculate}>Calculate</button>
                </div>
              </div> 
              </div>
            </div>
            <div className="col-sm-8">
              <div className="well">
                {this.state.outcome}
                <div className="row">
                 <div className="col-sm-3">
                    <div className="well text-center">
                      <p>Twenties</p>
                      <p className="lead">{this.state.twenties}</p>
                    </div>
                 </div>
                 <div className="col-sm-3">
                   <div className="well text-center">
                    <p>Tens</p>
                    <p className="lead">{this.state.tens}</p>
                   </div>
                 </div>
                  <div className="col-sm-3">
                    <div className="well text-center">
                      <p>Fives</p>
                      <p className="lead">{this.state.fives}</p>
                    </div>
                  </div>
                  <div className="col-sm-3">
                    <div className="well text-center">
                      <p>Ones</p>
                      <p className="lead">{this.state.ones}</p>
                    </div>
                  </div>
               </div>
               <div className="row">
                 <div className="col-sm-3">
                   <div className="well text-center">
                      <p>Quarters</p>
                      <p className="lead">{this.state.quarters}</p>
                    </div>
                 </div>
                 <div className="col-sm-3">
                    <div className="well text-center">
                      <p>Dimes</p>
                      <p className="lead">{this.state.dimes}</p>
                    </div>
                  </div>
                  <div className="col-sm-3">
                    <div className="well text-center">
                      <p>Nickles</p>
                      <p className="lead">{this.state.nickels}</p>
                    </div>
                 </div>
                  <div className="col-sm-3">
                    <div className="well text-center">
                      <p>Pennies</p>
                      <p className="lead">{this.state.pennies}</p>
                    </div>
                 </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      )
    }
  }

export default App;
