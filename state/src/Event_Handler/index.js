import React, { Component } from 'react';

class Event_Handler extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             changedVal:''
        }
    }

    handleChnge=(e)=>{
        this.setState({
            changedVal: e.target.value
        })
    }
    
    render() {
        const {changedVal}=this.state;
        return (
            <div>
                <input type="text" onChange={this.handleChnge} />
                <p>{changedVal}</p>
            </div>
                
        
        )
    }
}

export default Event_Handler;