import React from 'react'
import './result.css'

export default class Result extends React.Component {

  render() { // Displays result as soon as the API call completes
    return (
      <div id="resultDiv">
        <h3>Interest rate: </h3><h2>{this.props.interest}%</h2>
        <h3>Monthly payment amount: </h3><h2>${this.props.monthlyPayment}</h2>
      </div>
    )
  }
}