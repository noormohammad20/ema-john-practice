import React, { useState } from 'react'

const Shipment = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')
    const [error, setError] = useState('')
    // const navigate = useNavigate()

    const handleNameBlur = e => {
        setName(e.target.value)
    }

    const handleEmailBlur = e => {
        setEmail(e.target.value)
    }
    const handleAddressBlur = e => {
        setAddress(e.target.value)
    }
    const handlePhoneBlur = e => {
        setPhone(e.target.value)
    }
    const handleCreateUser = e => {
        e.preventDefault()

    }
    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Shipping Information</h2>
                <form onSubmit={handleCreateUser}>
                    <div className="input-group">
                        <label htmlFor="name">Your Name</label>
                        <input onBlur={handleNameBlur} type="text" name="name" id="name" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="Email" id="email" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="address">Address</label>
                        <input onBlur={handleAddressBlur} type="text" name="Address" id="address" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="phone">Phone Number</label>
                        <input onBlur={handlePhoneBlur} type="number" name="Phone" id="phone" required />
                    </div>
                    <p style={{ color: 'red' }}>{error}</p>
                    <input className='form-submit' type="submit" value="Add-Shipping" />
                </form>
            </div>
        </div>
    )
}

export default Shipment