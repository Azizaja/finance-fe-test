import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Login.css'

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Username: ${username} Password: ${password}`);
    };

    return (
        <div className='container'>
            <h2>Log In</h2>
            <p className='text-center'><b>Fill the form to log in</b></p>

            <form action='#' onSubmit={handleSubmit}>
                <div class="form-floating">
                    <input type="email" class="form-control" id="email" placeholder="your@gmail.com" value={username}
                        onChange={(e) => setUsername(e.target.value)} />
                    <label htmlFor="email">Email address</label>
                </div>
                <div class="form-floating">
                    <input type="password" class="form-control" id="password" placeholder="your password" value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                    <label htmlFor="password">Password</label>
                </div>
                <a href='Home' className='button mb-3'>Log In</a>
                <div class="form-check">
                    <p className='text-center'>Forgot Password? <a href='/'>Reset Password</a></p>
                    <p className='text-center'>Don't have an account? <a href='/'>Sign Up</a></p>
                </div>
            </form>
        </div>
    );
};

export default Login;
