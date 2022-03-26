import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Products/Product';
import './Shop.css';

const Shop = () => {


    const [products, setProducts] = useState([]);
    let [cart, setCart] = useState([]);
    const [finalSelected,setFinalSelected]=useState([]);
    

    useEffect(() => {
      fetch("cars.json")
        .then((response) => response.json())
        .then((data) => setProducts(data));
    }, []);

    const handleAddToCart = (selectedProduct) => {
   
      // console.log(selectedProduct);

      let newCart = [];
      
      const exists = cart.find((product) => product.id === selectedProduct.id);
      if (!exists) {
        selectedProduct.quantity = 1;
        newCart = [...cart, selectedProduct];
      } else {
        const restItems = cart.filter(
          (product) => product.id !== selectedProduct.id
        );
        exists.quantity = exists.quantity + 1;
        newCart = [...restItems, exists];
      }

      setCart(newCart);   
    };



    const showRandomItem=()=>{


      console.log(cart);
      const random = Math.floor(Math.random() * cart.length);
      // console.log(random, cart[random]);
      clearCart();
      setFinalSelected(cart[random].name);
      
      

    }

    const clearCart=()=>{
      setCart([]);
      console.log("Cart Cleared");
    }

    return (
      <div className="shop-ui">
        <div className="products-container">
          {products.map((product) => (
            <Product
              key={product.id}
              car={product}
              handleAddToCart={handleAddToCart}
            ></Product>
          ))}
        </div>

        <div className="cart-container">
          Cart Container
          <h3>{cart.length}</h3>
          <h6>
            {cart.map((item) => (
              <Cart key={item.id} cart={item}></Cart>
            ))}
          </h6>
          <h5>{finalSelected}</h5>
          <button className='btn btn-success' onClick={showRandomItem}>Select Randomly</button>
          <button className='btn btn-danger' onClick={clearCart}>Clear Cart</button>
        </div>
      </div>
    );
};

export default Shop;