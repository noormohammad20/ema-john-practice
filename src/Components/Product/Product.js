import React from 'react'
import './Product.css'
const Product = ({ product, handleAddToCart }) => {
    const { img, name, seller, price, ratings } = product

    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-info">
                <h6 className='product-name'>{name}</h6>
                <p>Price: ${price}</p>
                <p><small>Seller:{seller}</small></p>
                <p><small>Ratings {ratings}stars</small></p>
            </div>
            <button onClick={() => handleAddToCart(product)} className='btn-cart'>
                <p>Add To Cart</p>
            </button>
        </div>
    )
}

export default Product