import React from 'react'
import './Products.css'

const Products = () => {
  return (
    <>
    <div className='product-section'>
        <div className='text'>
        <h1>Featured Products</h1>
        <p>Browse our carefully curated collections</p>
         </div>
        <div className='list'>
            <div className='product'>
                <img src='shoes.jpg' alt='Shoes' />
                <h3>Urban Sneakers</h3>
                <p>Unisex</p>
                <h4>$29.9</h4>
                <button className='cart-btn'>Add to Cart</button>
            </div>
            <div className='product'>
                <img src='t-shirt.jpg' alt='Shoes' />
                <h3>Casula T-Shirt</h3>
                <p>Men's</p>
                <h4>$39.9</h4>
                <button className='cart-btn'>Add to Cart</button>
            </div>
            <div className='product'>
                <img src='jeans.jpg' alt='Shoes' />
                <h3>Casula Jeans</h3>
                <p>Women's</p>
                <h4>$45.9</h4>
                <button className='cart-btn'>Add to Cart</button>
            </div>
            <div className='product'>
                <img src='shirt.jpg' alt='Shoes' />
                <h3>Formal Shirt</h3>
                <p>Men's</p>
                <h4>$40.9</h4>
                <button className='cart-btn'>Add to Cart</button>
            </div>  
        </div>
        <center>
            <button className='btn'>View All Products</button>
        </center>
    </div>
    </>
  )
}

export default Products