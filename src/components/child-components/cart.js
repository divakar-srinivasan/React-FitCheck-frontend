import React, { useState } from 'react';
import img1 from "../../images/cart/img1.jpeg"
import img2 from "../../images/cart/img2.jpg"
import img3 from "../../images/cart/img3.jpeg"
import img4 from "../../images/cart/img4.jpeg"
import img5 from "../../images/cart/img5.jpeg"
import img6 from "../../images/cart/img6.jpeg"
import img7 from "../../images/cart/img7.jpeg"
import img8 from "../../images/cart/img8.jpeg"
import img9 from "../../images/cart/img9.jpeg"
import img10 from "../../images/cart/img10.jpeg"
import img11 from "../../images/cart/img11.jpeg"
import img12 from "../../images/cart/img12.jpeg"
import img13 from "../../images/cart/img13.jpeg"


// Sample data for gym tools
const gymTools = [
    { id: 1, img: img1, name: 'Dumbbell', description: '10kg dumbbell', price: 2000 },
    { id: 2, img: img2, name: 'Yoga Mat', description: 'Non-slip mat', price: 1500 },
    { id: 3, img: img3, name: 'Kettlebell', description: '15kg kettlebell', price: 2500 },
    { id: 4, img: img4, name: 'Treadmill', description: 'Electric treadmill', price: 25000 },
    { id: 5, img: img5, name: 'Resistance Bands', description: 'Set of 5 bands', price: 300 },
    { id: 6, img: img6, name: 'Pull-Up Bar', description: 'Doorway pull-up bar', price: 350 },
    { id: 7, img:img7, name: 'Medicine Ball', description: '10kg medicine ball', price: 400 },
    { id: 8, img: img8, name: 'Stationary Bike', description: 'Indoor exercise bike', price: 1500 },
    { id: 9, img: img9, name: 'Rowing Machine', description: 'Foldable rowing machine', price: 2000 },
    { id: 10, img: img10, name: 'Smith Machine', description: 'Multi-functional smith machine', price: 5000 },
    { id: 11, img: img11, name: 'Leg Press Machine', description: 'Adjustable leg press machine', price: 4500 },
    { id: 12, img: img12, name: 'Chest Press Machine', description: 'Incline chest press machine', price: 4000 },
    { id: 13, img:img13, name: 'Cable Machine', description: 'Adjustable cable machine', price: 3500 }
  ];
  

  const ProductCard = ({ product, addToCart }) => (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center hover:scale-105 hover:shadow-slate-400">
      <img src={product.img} alt={product.name} className="w-32 h-32 md:w-40 md:h-40 object-cover mb-4" />
      <h2 className="text-md md:text-lg font-bold">{product.name}</h2>
      <p className="text-sm md:text-base text-gray-600">{product.description}</p>
      <p className="text-md md:text-lg font-semibold mt-2">Rs.{product.price}</p>
      <div className="flex space-x-4 mt-4">
        <button className="bg-blue-500 text-white px-3 py-1 md:px-4 md:py-2 rounded" onClick={() => addToCart(product)}>
          Add to Cart
        </button>
        <button className="bg-green-500 text-white px-3 py-1 md:px-4 md:py-2 rounded">Buy</button>
      </div>
    </div>
  );
  
  const Cart = ({ cartItems }) => {
    const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);
  
    return (
      <div className="bg-gray-100 p-4 rounded-lg shadow-md flex flex-col justify-between h-auto">
        <div>
          <h2 className="text-xl font-bold mb-4">Your Cart</h2>
          {cartItems.length === 0 ? (
            <p className="text-gray-600">No items added yet.</p>
          ) : (
            <ul>
              {cartItems.map((item, index) => (
                <li key={index} className="flex justify-between my-2">
                  <span>{item.name}</span>
                  <span>Rs.{item.price}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
  
        {cartItems.length > 0 && (
          <div className="mt-4 border-t pt-4">
            <div className="flex justify-between text-lg font-semibold">
              <span>Total:</span>
              <span>Rs.{totalPrice.toFixed(2)}</span>
            </div>
            <button className="bg-blue-500 text-white w-full py-2 rounded mt-4">
              Buy Now
            </button>
          </div>
        )}
      </div>
    );
  };
  
  const ECart = () => {
    const [cartItems, setCartItems] = useState([]);
  
    const addToCart = (product) => {
      setCartItems([...cartItems, product]);
    };
  
    return (
      <div className="flex bg-gray-100 flex-col md:flex-row h-full p-4 md:p-8">
        <div className="w-full md:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:pr-4 mb-4 md:mb-0">
          {gymTools.map((product) => (
            <ProductCard key={product.id} product={product} addToCart={addToCart} />
          ))}
        </div>
  
        <div className="w-full md:w-1/4">
          <Cart cartItems={cartItems} />
        </div>
      </div>
    );
  };

export default ECart;
