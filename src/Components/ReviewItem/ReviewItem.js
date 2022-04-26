import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './ReviewItem.css'
const ReviewItem = ({ product, handleRemoveProduct }) => {

    const { name, price, img, shipping, quantity } = product
    return (
        <div className='review-item'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className="review-items-details-container">
                <div className="review-item-details">
                    <p className='product-name' title={name}>
                        {name.length > 20 ? name.slice(0, 20) + '...' : name}
                    </p>
                    <p>Price:$ <span className='orange'>{price}</span> </p>
                    <p><small>Shipping:${shipping}</small></p>
                    <p><small>Quantity{quantity}</small></p>
                </div>
                <div className="delete-container">
                    <button onClick={() => handleRemoveProduct(product)} className='delete-btn'><FontAwesomeIcon icon={faTrashAlt} className='delete-icon'></FontAwesomeIcon></button>
                </div>
            </div>
        </div>
    )
}

export default ReviewItem