import React from 'react'
import ProductCard from "./ProductCard";

export default function ProductList(props) {
  return (
    props.products.map((product,index)=>{
        return <ProductCard product={product} key={index}  incrQuantity={props.incrQuantity} />
    })
  )
}
