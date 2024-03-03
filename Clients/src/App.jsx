import React from 'react';
import Test from './Components/test/index';
import ToDo from './Components/ToDo';

const App = () => {
    const [isLoginMode, setIsLoginMode] = React.useState(false);

    return (
        <div>
            {isLoginMode ? <ToDo /> : <Test />}
        </div>
    )
};

export default App;
