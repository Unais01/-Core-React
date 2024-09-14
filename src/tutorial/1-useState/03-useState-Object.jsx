import { useState } from 'react';
import './02-useState.css';
const UseStateObject = () => {
    const [person, setPerson] = useState({
        name: 'jhon',
        age: 23,
        hobby: 'Scream at computer',
    });
    // const { name, age, hobby } = person;

    // const displayPerson = () => {
    //     setPerson({
    //         name: 'unais',
    //         age: 21,
    //         hobby: 'coding with series tv shows'
    //     })
    // };
    const displayPerson = () => {
        setPerson({ ...person, name: 'Unais' });
    };
    const { name, age, hobby } = person;
    return (
        <>
            <div className="wrapper">
                <h2>{name}</h2>
                <h2>{age}</h2>
                <h2>{hobby}</h2>
                <button className="btn" onClick={displayPerson}>
                    Show John
                </button>
            </div>
        </>
    );
};

export default UseStateObject;
