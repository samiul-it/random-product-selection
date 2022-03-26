import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Products/Product';
import './Shop.css';

const Shop = () => {


    const [products, setProducts] = useState([]);
    let [cart, setCart] = useState([]);

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

      generateRandomNumber(newCart);

      

     
      

      
    };


    const generateRandomNumber=(cartItems)=>{
      const rndInt = Math.floor(Math.random() * 4) + 1;
      const matchWithRandom = (id) => {
        if (rndInt === id) {
          console.log("Matched",cartItems);
          cartItems.filter(cartItem=>console.log(cartItem.id
          ));
          
        } else {
          console.log("Does Not Matched");
        }
      };
      cartItems.map(productId=>matchWithRandom(productId.id));
      

      // console.log(cartItems);
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
          {/* {cart.map((item) => console.log(item))} */}
          <h6>
            {cart.map((item) => (
              <Cart key={item.id} cart={item}></Cart>
            ))}
          </h6>
          <button>Select Randomly</button>
          <button >Clear Cart</button>
        </div>
      </div>
    );
};

export default Shop;