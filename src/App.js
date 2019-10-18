import React from 'react';
import './App.css';
import Input from './components/input'
import Result from './components/result'
import Sidebar from './components/sidebar'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  handleInput = (...values) => {  // Handler for setting state when input is present in Input component
    if(values[0].amount && values[0].duration) {
      fetch('https://ftl-frontend-test.herokuapp.com/interest?amount=' + values[0].amount + '&numMonths=' + values[0].duration)
        .then(resp => resp.json())
        .then(data => {
            let interest = data.interestRate.toString().slice(2, 4)
            if (interest.length === 1)
                interest += 0
            this.setState({
              amount: values[0].amount,
              duration: values[0].duration,
              interest: interest,
              monthlyPayment: data.monthlyPayment.amount
            })
        })
        .catch(err => {
            console.log(err)
        })
    }
  }

  handleSidebar = (e, i) => { // Handler for setting state when an entry is clicked in the Sidebar component
    let storedData = JSON.parse(localStorage[i])
    fetch('https://ftl-frontend-test.herokuapp.com/interest?amount=' + storedData.amount + '&numMonths=' + storedData.duration)
        .then(resp => resp.json())
        .then(data => {
            let interest = data.interestRate.toString().slice(2, 4)
            if (interest.length === 1)
                interest += 0
            this.setState({
              amount: storedData.amount,
              duration: storedData.duration,
              interest: interest,
              monthlyPayment: data.monthlyPayment.amount
            })
        })
        .catch(err => {
            console.log(err)
        })
      document.getElementById('amount').value = storedData.amount
      document.getElementById('amountSlider').value = storedData.amount
      document.getElementById('duration').value = storedData.duration
      document.getElementById('durationSlider').value = storedData.duration      
  }

  render() {
    return (
      <div id="container">
        <Input handleInput={this.handleInput} amount={this.state.amount} duration={this.state.duration}></Input>
        <Sidebar amount={this.state.amount} duration={this.state.duration} handleSidebar={this.handleSidebar}></Sidebar>
        <Result interest={this.state.interest} monthlyPayment={this.state.monthlyPayment}></Result>
      </div>
    )
  }
}