import React from 'react';

const Cart = (props) => {
    // console.log(props.cart.name);
    const {name}=props.cart;
    
    return (
        <div>
            <h4>Name:{name}</h4>
            
        </div>
    );
};

export default Cart;