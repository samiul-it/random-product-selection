import React from 'react';
import './Cart.css';

const Cart = (props) => {
    // console.log(props.cart.name);
    const {name,img}=props.cart;
    
    return (
      <div className="cart">
        <img src={img} alt="car image" />
        <p>
          {name}
        </p>
      </div>
    );
};

export default Cart;