
import { useEffect, useState } from 'react';
import './01-useEffect.css'

const useEffectExample = () => {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1);
    }
    function sayHello() {
        console.log('hello!');


    }
    sayHello();
    useEffect(() => { console.log('hello from useEffect!'); }, [])
    return (
        <>
            <div className="wrapper">
                <h1>count : {count}</h1>
                <button className="btn" onClick={handleClick}>Add</button>
            </div>
        </>
    )
}

export default useEffectExample;