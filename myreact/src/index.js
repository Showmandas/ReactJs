import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import reportWebVitals from './reportWebVitals';

const index=0
setInterval(()=>{
  const elem=(
    <h1 className='heading' tabIndex={index}>
      <span className='text'> Now it's {new Date().toLocaleTimeString()}</span>
    </h1>
  );
  ReactDOM.render(elem,document.getElementById('root'));
},1000);

reportWebVitals();
