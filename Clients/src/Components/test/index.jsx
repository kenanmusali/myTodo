// import React from 'react';
// import './style.css';

// const LoginMenu = () => {
//     return (
//         <div className="login-menu">
//             <div className='userName'>
//                 <p>User Name</p>
//                 <input type="text" placeholder='@'/>
//             </div>
//             <div>
//                 <p>Password</p>
//                 <input type="password" />
//             </div>


//             <button className='login'>Log In</button>
//             <button className='signin'>No Account? Create One.</button>
//         </div>
//     );
// };

// export default LoginMenu;


import React, { useState } from 'react';
import './style.css';

const LoginMenu = () => {
    const [isLoginMode, setIsLoginMode] = useState(true);

    const toggleMode = () => {
        setIsLoginMode(!isLoginMode);
    };

    return (
        <div className="login-menu">
            <div className='userName'>
                <p>User Name</p>
                <input type="text" placeholder='@' />
            </div>
            <div>
                <p>Password</p>
                <input type="password" />
            </div>
            <a className='login'>{isLoginMode ? 'Log In' : 'Sign In'}</a>
            <a className='signin' onClick={toggleMode}>{isLoginMode ? 'No Account? Create One.' : 'Already have Account?'}</a>
        </div>
    );
};

export default LoginMenu;
