import React, { Component } from 'react'

export default class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username:'',
         comments:'',
         topic:''
      }
    }

    handleUserName=(e)=>{
        this.setState({
            username:e.target.value
        })
    }

    handleComments=(e)=>{
        this.setState({
            comments:e.target.value
        })
    }

    handleTopic=(e)=>{
        this.setState({
            topic:e.target.value
        })
    }

    handleSubmit=(e)=>{
        alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
        e.preventDefault()

    }
  render() {
    const {username,comments,topic}=this.state
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
            <div className='input'>
                <label>Username</label>
                <input type="text" value={username} onChange={this.handleUserName} />
            </div>
            
            <div className='input'>
                <label>Comments:</label>
                <textarea value={comments} onChange={this.handleComments} ></textarea>
            </div>
            
            <div className='input'>
                <label>Topics:</label>
                <select value={topic} onChange={this.handleTopic} >
                    <option value="select topic">Select Topics</option>
                    <option value="React">React</option>
                    <option value="Angular">Angular</option>
                    <option value="Vue">Vue</option>
                </select>
            </div>
            <div className='subbtn'>
                <button type='submit'>Submit</button>
            </div>
        </form>
      </div>
    )
  }
}
