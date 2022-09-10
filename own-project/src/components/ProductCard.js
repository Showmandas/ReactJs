import React from "react";

function ProductCard(props) {
  const {price, name, quantity} = props.product;

  return (
    <div className="row">
      <div className="col-4">
        <h4>{name} <span class="badge bg-secondary">৳  {price}</span></h4>
        
      </div>
      <div className="col-4">
        <div className="btn-group" role="group" arial-lebel='Basic mixed styles example'>
        <button type="button" class="btn btn-outline-danger" onClick={()=>{props.decrQuantity(props.index);}}>
          -
        </button>
        <button type="button" class="btn btn-outline-warning">
          {quantity}
        </button>
        <button type="button" class="btn btn-outline-success" onClick={()=>{props.incrQuantity(props.index);}}>
          +
        </button>
        </div>
        
      </div>
      <div className="col-4">
        {quantity * price}
      </div>
    </div>
  );
}

export default ProductCard;
