import './04-useState.css';
import { useState } from 'react';
const UseStateGotcha = () => {
    const [count, setCount] = useState(0);

    // Function to increment the count
    const increase = () => {
        setTimeout(() => {
            setCount((currentState) => {
                const newState = currentState + 1;
                return newState;
            });
        }, 1000);
    };

    // Function to decrement the count
    const decrease = () => {
        setCount((currentState) => {
            const newState = currentState - 1;
            return newState;
        });
    };
    const reset = () => {
        setCount((currentState) => {
            const newState = currentState - currentState;
            return newState;
        });
    };

    return (
        <>
            <div className="counter-container">
                <h1 className="counter-value">{count}</h1>
                <div className="buttons">
                    <button className="btn decrease" onClick={decrease}>
                        Decrease
                    </button>
                    <button className="btn increase" onClick={increase}>
                        Increase
                    </button>
                    <button className="btn reset" onClick={reset}>
                        Reset
                    </button>
                </div>
            </div>
        </>
    );
};
export default UseStateGotcha;
