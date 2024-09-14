import { data } from '../../data';
import React from 'react';
import './02-useState.css';

const List = () => {
    const [people, setPeople] = React.useState(data);
    const removeItem = (id) => {
        setPeople(people.filter((person) => person.id !== id));
    };
    const clearAll = () => {
        setPeople([]);
    };
    return (
        <div className="wrapper">
            {people.map((item) => {
                const { id, name } = item;
                return (
                    <div key={id}>
                        <h1>{name}</h1>
                        <button className="btn" onClick={() => removeItem(id)}>
                            Remove
                        </button>
                    </div>
                );
            })}
            <button onClick={clearAll}>Clear All</button>
        </div>
    );
};

export default List;
