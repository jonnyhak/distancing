
import React, { Component } from 'react'
import Lenders from './Lenders'


export default class MainContainer extends Component {
    
    state = {
        lenders: []
    }

    componentDidMount() {
        fetch('http://localhost:3000/lenders')
        .then(response => {
            return response.json()
        })
        .then(arr => {
            this.setState({
                lenders: arr
            })
        })

    }
    
    render() {
        console.log(this.state)
        return (
            <div>
                <h1>Main Container!</h1>
                <Lenders lenders={this.state.lenders} />
            </div>
        )
    }
}