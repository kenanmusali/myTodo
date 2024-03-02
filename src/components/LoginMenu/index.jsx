
import './style.css';

const LoginMenu = () => {
    return (
        <div className="login-menu">
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button>Login</button>
            <button>Sign Up</button>
        </div>
    );
};

export default LoginMenu;
