import React, { useReducer, useState } from 'react';
import './index.css';

const GLOBAL = {
    ADD_TASK: 'add task',
    REMOVE_TASK: 'remove task',
    UPDATE_TASK: 'update task',
    RESET_TASK: 'reset task',
};

const initialState = {
    myTasks: [],
};

const reducer = (state, action) => {
    switch (action.type) {
        case GLOBAL.ADD_TASK:
            return {
                ...state,
                myTasks: [...state.myTasks, action.payload],
            };
        case GLOBAL.RESET_TASK:
            return {
                myTasks: [],
            };
        case GLOBAL.REMOVE_TASK:
            return {
                ...state,
                myTasks: state.myTasks.filter(
                    (_, idx) => idx !== action.payload
                ),
            };

        default:
            return state;
    }
};

function Todo() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [task, setTask] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (task === '') return;
        dispatch({ type: GLOBAL.ADD_TASK, payload: task });
        setTask('');
    };
    const resetTask = () => {
        dispatch({ type: GLOBAL.RESET_TASK });
    };
    const removeItem = (idx) => {
        dispatch({ type: GLOBAL.RESET_TASK, payload: idx });
    };
    console.log(state.myTasks);
    return (
        <div className="container">
            <h1>React Todo</h1>
            <div className="form-wrapper">
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Add task"
                        value={task}
                        onChange={(e) => setTask(e.target.value)}
                        className="inputField"
                    />
                    <button className="btn" type="submit">
                        Submit
                    </button>
                </form>
            </div>
            <button className="reset-btn" onClick={resetTask}>
                Reset Task
            </button>
            <div className="tasks-wrapper">
                <ul className="list-class">
                    {state.myTasks.map((task, idx) => (
                        <div>
                            <li className="list-item" key={idx}>
                                {task}
                                <button
                                    className="remove-btn"
                                    onClick={() => removeItem(idx)}
                                >
                                    Remove
                                </button>
                            </li>
                        </div>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Todo;
