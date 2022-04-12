import React, { useState } from 'react'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth'
import { Link, useNavigate } from 'react-router-dom'
import auth from '../../firebase.init'
import './Login.css'


const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth)
    const navigate = useNavigate()

    const handleEmailBlur = e => {
        setEmail(e.target.value)
    }
    const handlePasswordBlur = e => {
        setPassword(e.target.value)
    }

    if (user) {
        navigate('/shop')
    }

    const handleUserLogin = e => {
        e.preventDefault()
        signInWithEmailAndPassword(email, password)

    }
    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Login</h2>
                <form onSubmit={handleUserLogin}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="Email" id="email" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name="Password" id="password" required />
                    </div>

                    <p style={{ color: 'red' }}>{error?.message}</p>
                    {
                        loading && <p>Loading...</p>
                    }

                    <input className='form-submit' type="submit" value="Login" />
                </form>
                <p className='new-to-ema'>
                    New to ema-john? <Link className='form-link' to='/signup'>Create an account</Link>
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