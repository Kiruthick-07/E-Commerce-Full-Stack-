import React from 'react'
import './Products.css'
import { useCart } from './Cart';

const productList = [
  {
    img: 'shoes.jpg',
    name: 'Urban Sneakers',
    category: 'Unisex',
    price: 29.9,
  },
  {
    img: 't-shirt.jpg',
    name: 'Casula T-Shirt',
    category: "Men's",
    price: 39.9,
  },
  {
    img: 'jeans.jpg',
    name: 'Casula Jeans',
    category: "Women's",
    price: 45.9,
  },
  {
    img: 'shirt.jpg',
    name: 'Formal Shirt',
    category: "Men's",
    price: 40.9,
  },
];

const Products = () => {
  const { addToCart } = useCart();

  const handleAddToCart = (product) => {
    addToCart(product);
    alert(`${product.name} has been added to your cart!`);
  };

  return (
    <>
    <div className='product-section'>
        <div className='text'>
        <h1>Featured Products</h1>
        <p>Browse our carefully curated collections</p>
         </div>
        <div className='list'>
          {productList.map((product, idx) => (
            <div className='product' key={idx}>
                <img src={product.img} alt={product.name} />
                <h3>{product.name}</h3>
                <p>{product.category}</p>
                <h4>${product.price}</h4>
                <button className='cart-btn' onClick={() => handleAddToCart(product)}>Add to Cart</button>
            </div>
          ))}
        </div>
        <center>
            <button className='btn'>View All Products</button>
        </center>
    </div>
    </>
  )
}

export default Products