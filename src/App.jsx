import { BrowserRouter, Route } from 'react-router-dom';
import LoginMenu from './components/LoginMenu';

const App = () => {
    return (
        <BrowserRouter>
            <div>
                <Route exact path="/" component={LoginMenu} />
            </div>
        </BrowserRouter>
    );
};

export default App;
