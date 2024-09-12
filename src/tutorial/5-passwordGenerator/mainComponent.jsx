import { useCallback, useEffect, useRef, useState } from 'react';
import './component.css'


const MainCtn = () => {
    const [password, setPassword] = useState('');
    const [length, setLength] = useState(8);
    const [numberAllowed, setNumberAllowed] = useState(false);
    const [charAllowed, setCharAllowed] = useState(false);
    //useRef
    const passRef=useRef(null);
    const passwordGeneration = useCallback(() => {
        let passStr = '';
        let passconstruction = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        if (charAllowed) passconstruction += "@#$&_+.<>?!";
        if (numberAllowed) passconstruction += 123456789;

        for (let i = 1; i <= length; i++) {
            let char = Math.round(Math.random() * passconstruction.length + 1)
            passStr += passconstruction.charAt(char)

        }
        setPassword(passStr);

    },[length,numberAllowed,charAllowed]);
   
    const numAllowed=(prev)=>{
        prev=!prev;
        setNumberAllowed(!numberAllowed);
    }
    const cAllowed=(prev)=>{ 
        prev=!prev;
        setCharAllowed(!charAllowed);

    }

    const copyToClipboard=useCallback(()=>{
        passRef.current?.select();
        window.navigator.clipboard.writeText(password);
    },[password])


    useEffect(()=>{
        passwordGeneration();
    },[length,charAllowed,numberAllowed,passwordGeneration] )
    return (


        <div className="form-container">
            <h2>Password Generation</h2>

            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                    type="text"
                    id="password"
                    name="password"
                    autoCapitalize="off"
                    placeholder="Enter password"
                    value={password}
                    ref={passRef}
                    readOnly
                     />
                <button onClick={copyToClipboard}>copy</button>
            </div>
            {/* range */}
            <div className="form-group">
                <label htmlFor="length-slider">Password Length</label>
                <input
                    type="range"
                    id="length-slider"
                    min={1} max={30}
                    value={length}
                    onChange={(e) => setLength(e.target.value)} />
                <div className="slider-output">Length: <span id="slider-value">{length}</span></div>
            </div>

            <div className="form-group checkbox-group">
                <label>
                    <input
                        type="checkbox"
                        id="numbers-check"
                        defaultChecked={numberAllowed}
                        onChange={(prev)=>numAllowed(prev)}
                    />  Numbers</label>
                <label>
                    <input type="checkbox"
                        id="characters-check"
                        defaultChecked={charAllowed}
                        onChange={(prev)=>cAllowed(prev)} />  Characters</label>
            </div>

            {/* <button type="submit" className='btn'>Submit</button> */}
        </div>

    )
}
export default MainCtn;