// import React from 'react';
import './style.css';

const LoginMenu = () => {
    return (
        <div className="login-menu">
            <div className='userName'>
                <p>User Name</p>
                <input type="text" />
            </div>
            <div>
                <p>Password</p>
                <input type="password" />
            </div>


            <button className='login'>Log In</button>
            <button className='signin'>No Account? Create.</button>
        </div>
    );
};

export default LoginMenu;
