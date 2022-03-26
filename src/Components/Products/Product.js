import React from 'react';


const Product = (props) => {
    const {img,name,price}=props.car;

    return (
      <div>
        <h2>Name: {name}</h2>
        <h6>Price:{price}</h6>
        <img src={img} alt="" />
        <button onClick={()=>props.handleAddToCart(props.car)}> Select for Cart</button>
      </div>
    );
};

export default Product;