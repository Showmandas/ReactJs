import React from "react";

export default class FormHandle extends React.Component{

    state={
        title:"javascript",
        textArea:"Javascript is cool language",
        library:"React",
        checkBox:"checked",
    }

    handleForm=(e)=>{
        // console.log(e.target.value)
        if(e.target.type==="text"){
            this.setState({
                title: e.target.value,
            })
        }else if(e.target.type==="textarea"){
            this.setState({
                textArea: e.target.value,
            })
        }else if(e.target.type==="select"){
            this.setState({
                library: e.target.value,
            })
            
        }
        else if(e.target.type==="checkbox"){
            // console.log(e.target.checked)
            this.setState({
                checkBox: e.target.checked,
            })
            
        }
        
    }

    SubmitForm=(e)=>{
        const {title,textArea,library,checkBox}=this.state;
        e.preventDefault();
        console.log(title,textArea,library,checkBox);
     }

       render(){
           const {title,textArea,library,checkBox}=this.state;
           return(
               <div>
                   <form onSubmit={this.SubmitForm}>
                       <input type="text" placeholder="Enter title" value={title} onChange={this.handleForm} />
                       <br/>
                       <br/>
                       <textarea name="textArea" value={textArea} onChange={this.handleForm}></textarea>
                       <br/>
                       <br/>
                       <select value={library} onChange={this.handleForm}>
                           <option value="React">React</option>
                           <option value="Jquery">Jquery</option>
                           <option value="Angular">Angular</option>
                       </select>
                       <br/>
                       <br/>
                       <input type="checkbox" checked={checkBox} onChange={this.handleForm}/>
                       <br/>
                       <br/>
                       <input type="submit" value="Submit data" />
                   </form>
               </div>
           )
       }

}