import { useState } from 'react';

const Counter = () => {
    let [count, setCount] = useState(1);
    const increamentCount = () => {
        count < 20 ? setCount(++count) : alert('Already 20');

        console.log(count);
    };
    const decreamentCount = () => {
        count > 0 ? setCount(--count) : alert('Already Zero');
    };
    return (
        <>
            <div className="wrapper">
                <h1>Counter Project</h1>
                <h3>{count}</h3>
                <button className="btn" onClick={increamentCount}>
                    Increment
                </button>
                <button className="btn" onClick={decreamentCount}>
                    Decrement
                </button>
            </div>
        </>
    );
};

export default Counter;
