import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCheckSquare,faCartShopping} from "@fortawesome/free-solid-svg-icons";


const Product = (props) => {
    const {img,name,price}=props.car;

    return (
      <div className="product">
        <img src={img} alt=""></img>
        <div className="product-info">
          <p className="product-name">{name}</p>
          <p>Price: ${price}</p>
        </div>
        <button
          onClick={() => props.handleAddToCart(props.car)}
          className="btn btn-warning"
        >
          <p className="btn-text">
            Add to Cart <FontAwesomeIcon icon={faCartShopping} />
          </p>
        </button>
      </div>
    );
};

export default Product;