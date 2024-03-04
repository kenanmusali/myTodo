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

const LoginMenu = ({ setIsLogin }) => {
    const [isLoginMode, setIsLoginMode] = useState(true);

    const toggleMode = () => {
        setIsLoginMode(!isLoginMode);
    };

    const [formData, setFormData] = useState({
        userid: "",
        passwordid: ""
    })

    const loginUser = (e) => {
        e.preventDefault();
        fetch("http://localhost:3000/data")
            .then(res => res.json())
            .then(data => {
                let foundUser = data.find(user => user.username === formData.userid && user.password === formData.passwordid);
                console.log(foundUser)
                console.log(typeof setIsLogin)
                if (foundUser) {
                    setIsLogin(true);
                } else {
                    alert("Username not Found.");

                }
                console.log(formData);
            });
    };

    return (
        <div className="login-menu">
            <div className='userName'>
                <p>User Name</p>
                <input type="text" placeholder='@' required maxLength={25}
                    onChange={(e) => setFormData({ ...formData, userid: e.target.value })} />
            </div>
            <div>
                <p>Password</p>
                <input type="password" required maxLength={50}
                    onChange={(e) => setFormData({ ...formData, passwordid: e.target.value })} />
            </div>
            <a onClick={loginUser} className='login'>{isLoginMode ? 'Log In' : 'Sign In'}</a>
            <a className='signin' onClick={toggleMode}>{isLoginMode ? 'No Account? Create One.' : 'Already have Account?'}</a>
        </div>
    );
};

export default LoginMenu;
