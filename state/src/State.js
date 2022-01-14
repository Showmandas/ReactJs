import React, { Component } from 'react'

export default class State extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0,
            //  msg:"state is changeable"
        }
    }

    incrhandle=()=>{
        this.setState({
            count:this.state.count + 1
        })
    }
    decrhandle=()=>{
        this.setState({
            count: this.state.count - 1
        })
    }
    
    render() {
    const {count,msg}=this.state;    
        return (
            
            <div>
                <h2>count : {count}</h2>
                {/* <h3>Message: {msg}</h3> */}
                <button onClick={this.incrhandle}>+</button>
                <button onClick={this.decrhandle} disabled={count===0?true:false}>-</button>
            </div>
        )
    }
}
