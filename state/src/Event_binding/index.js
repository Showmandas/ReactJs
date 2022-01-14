import React, { Component } from 'react'

export default class Event_binding extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }

        this.incrval=this.incrval.bind(this);
    }




    incrval=()=>{
        this.setState({
            count:this.state.count+1
        })
    }
    
    render() {
        const {count}=this.state;
        return (
            <div>
                <p>{count}</p>
                <button onClick={this.incrval}>increase</button>
            </div>
        )
    }
}
