import React from 'react'
import './input.css'

export default class Input extends React.Component {

    handleAmountChange = e => { // Handler for amount input box
        let amountSlider = document.getElementById('amountSlider')
        amountSlider.value = e.target.value
    }

    handleAmountSliderChange = e => { // Handler for amount slider
        let amount = document.getElementById('amount')
        let duration = document.getElementById('duration')
        amount.value = e.target.value
        if(amount.value && duration.value)
            this.props.handleInput({
                amount: amount.value,
                duration: duration.value
            })
    }

    handleDurationChange = e => { // Handler for duration input box
        let durationSlider = document.getElementById('durationSlider')
        durationSlider.value = e.target.value
    }

    handleDurationSliderChange = e => { // Handler for duration slider
        let amount = document.getElementById('amount')
        let duration = document.getElementById('duration')
        duration.value = e.target.value
        if(amount.value && duration.value)
            this.props.handleInput({
                amount: amount.value,
                duration: duration.value
            })
    }

    handleSubmit = e => { // Handler for submit button
        e.preventDefault()
        let amount = document.getElementById('amount')
        let duration = document.getElementById('duration')    
        if (amount.value && duration.value) {
            localStorage.setItem(localStorage.length + 1, JSON.stringify({
                amount: amount.value,
                duration: duration.value
            }))
            this.props.handleInput({
                amount: amount.value,
                duration: duration.value
            })
        }
    }

    render () { // Returns the view for Input component where user inputs data
        return (
            <div id="input">
                <form>
                    <label htmlFor="amount">Enter loan amount: $</label>
                    <input type="number" id="amount" name="amount" onChange={e => this.handleAmountChange(e)} min="500" max="5000" placeholder="Amount" required />
                    <span>$500</span>
                    <input type="range" id="amountSlider" onMouseMove={e => this.handleAmountSliderChange(e)} list="amountList" min="500" max="5000" />
                    <datalist id="amountList">
                        <option value="500"></option>
                        <option value="1625"></option>
                        <option value="2750"></option>
                        <option value="3875"></option>
                        <option value="5000"></option>
                    </datalist>
                    <span>$5000</span>
                    <br/><br/>
                    <label htmlFor="duration">Enter duration in months: </label>
                    <input type="number" id="duration" name="duration" onChange={e => this.handleDurationChange(e)} min="6" max="24" placeholder="Duration" required />
                    <span>6</span>
                    <input type="range" id="durationSlider" onMouseMove={e => this.handleDurationSliderChange(e)} list="durationList" min="6" max="24" />
                    <datalist id="durationList">
                        <option value="6"></option>
                        <option value="9"></option>
                        <option value="12"></option>
                        <option value="15"></option>
                        <option value="18"></option>
                        <option value="21"></option>
                        <option value="24"></option>
                    </datalist>
                    <span>24</span>
                    <br/><br/>
                    <input type="submit" onClick={e => this.handleSubmit(e)} id="submit" />
                </form>
            </div>
        )
    }
}