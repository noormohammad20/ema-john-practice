import React from 'react'
import './Product.css'
const Product = (props) => {
    const { product, handleAddToCart } = props
    const { img, name, seller, price, ratings } = props.product

    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-info">
                <h6 className='product-name'>{name}</h6>
                <p>Price: ${price}</p>
                <p><small>Seller:{seller}</small></p>
                <p><small>Ratings {ratings}stars</small></p>
            </div>
            <button onClick={() => handleAddToCart(product.id)} className='btn-cart'>
                <p>Add To Cart</p>
            </button>
        </div>
    )
}

export default Product