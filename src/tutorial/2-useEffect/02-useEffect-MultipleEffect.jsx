
import { useEffect, useState } from 'react';
import './01-useEffect.css'

const useEffectExample = () => {
    const [count, setCount] = useState(0);
    const [Scount, setSCount] = useState(0);
    useEffect(()=>{
        console.log('from 1...');
        
    },[count])
    useEffect(()=>{
        console.log('from 2...');
        
    },[Scount])
    

    return (
        <>
            <div className="wrapper">
                <h1>count 1 : {count}</h1>
                <h1>count 2 : {Scount}</h1>
                <button className="btn" onClick={()=>setCount(count+1)}>Add 1</button>
                <button className="btn" onClick={()=>setSCount(Scount+1)}>Add 2</button>
            </div>
        </>
    )
}

export default useEffectExample;