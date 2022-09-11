import React from 'react'
import  './styleCss.css'

function Styling(props) {
    let classname=props.priamry ? 'primary' : ''
  return (
    <h1 className={`${classname} font-xl`}>Stylesheets</h1>
  )
}

export default Styling