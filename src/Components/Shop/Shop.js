import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Products/Product';
import './Shop.css';

const Shop = () => {

    // const cars = [
    //   {
    //     id: 1,
    //     name: "Toyota",
    //     img: "https://randomuser.me/api/portraits/men/75.jpg",
    //     price: 10000,
    //   },
    //   {
    //     id: 2,
    //     name: "Nissan",
    //     img: "https://randomuser.me/api/portraits/men/75.jpg",
    //     price: 10000,
    //   },
    //   {
    //     id: 3,
    //     name: "AUDI",
    //     img: "https://randomuser.me/api/portraits/men/75.jpg",
    //     price: 10000,
    //   },
    //   {
    //     id: 4,
    //     name: "BMW",
    //     img: "https://randomuser.me/api/portraits/men/75.jpg",
    //     price: 10000,
    //   },
    //   {
    //     id: 5,
    //     name: "Proton",
    //     img: "https://randomuser.me/api/portraits/men/75.jpg",
    //     price: 10000,
    //   },
    //   {
    //     id: 6,
    //     name: "Foton",
    //     img: "https://randomuser.me/api/portraits/men/75.jpg",
    //     price: 10000,
    //   },
    //   {
    //     id: 7,
    //     name: "Suzuki",
    //     img: "https://randomuser.me/api/portraits/men/75.jpg",
    //     price: 10000,
    //   },
    //   {
    //     id: 8,
    //     name: "GLORY",
    //     img: "https://randomuser.me/api/portraits/men/75.jpg",
    //     price: 10000,
    //   },
    //   {
    //     id: 9,
    //     name: "ISUZU",
    //     img: "https://randomuser.me/api/portraits/men/75.jpg",
    //     price: 10000,
    //   },
    //   {
    //     id: 10,
    //     name: "TATA",
    //     img: "https://randomuser.me/api/portraits/men/75.jpg",
    //     price: 10000,
    //   },
    //   {
    //     id: 11,
    //     name: "Mitsubishi",
    //     img: "https://randomuser.me/api/portraits/men/75.jpg",
    //     price: 10000,
    //   },
    // ];

    const [products, setProducts] = useState([]);
    let [cart, setCart] = useState([]);

    useEffect(() => {
      fetch("cars.json")
        .then((response) => response.json())
        .then((data) => setProducts(data));
    }, []);

    const handleAddToCart = (product) => {
    //   console.log(product);
      const cartUpdate=[...cart,product];
      setCart(cartUpdate);

      
    };

    const clearCart=()=>{
      //Emptying cart

      const clearedCart=[];
      
      setCart=([]);
      console.log(cart);
    }


    return (
      <div className="shop-ui">
        <div className="shop-container">
          Shop Contianer
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
          <button onClick={clearCart}>Clear Cart</button>
        </div>
      </div>
    );
};

export default Shop;