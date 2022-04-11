import React from 'react'
import { Link } from 'react-router-dom'
import './Login.css'
const Login = () => {
    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Login</h2>
                <form>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="Email" id="email" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="Password" id="password" />
                    </div>
                    <input className='form-submit' type="submit" value="Login" />
                </form>
                <p className='new-to-ema'>
                    New to ema-john? <Link className='form-link' to='signup'>Create an account</Link>
                </p>
                <div className='or'>
                    or
                </div>
                <input className='form-submit-google' type="button" value="Continue With Google" />
            </div>
        </div>
    )
}

export default Login