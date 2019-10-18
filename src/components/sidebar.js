import React from 'react'
import './sidebar.css'

export default class Sidebar extends React.Component {

    updateList() { // Fetches previously submitted amount and duration values from localStorage and displays in the sidebar
      let recentList = []
        for (let i = 1; i < localStorage.length + 1; i++) {
        let currentItem = JSON.parse(localStorage[i])
          recentList.push(<React.Fragment key={i}><li onClick={(e) => this.props.handleSidebar(e, i)}><a href="#" className="listItems"> Loan amount: {currentItem.amount}, Duration: {currentItem.duration}</a></li><br/></React.Fragment>)
        }
        return recentList
    }

    render() { // Renders the list with previous values from localStorage
        return (
            <div id="sidebar">
                <p id="recentInput">Recent submits</p>
                <hr/>
                <ol id="list">
                  {this.updateList()}
                </ol>
            </div>
        )
    }
}