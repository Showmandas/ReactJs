import React,{useState} from 'react';
import Header from './Header';
import Note from './Note';
import Footer from './Footer';
import CreateNote from './CreateNote';
const App = () => {

  const [addItem,setAddItem]=useState([]);


  const addnote=(note)=>{
    setAddItem((preVal)=>{
      return [...preVal,note];
    });
    console.log(note);
  };

  return (
  <>
      <Header />
      <CreateNote passNote={addnote} />
      
      {addItem.map((items,index)=>{
        return(
          <Note 
          key={index}
          id={index}
          title={items.title}
          content={items.content}
          />
        )
       })};
      <Footer />
  </>
  );
};

export default App;
