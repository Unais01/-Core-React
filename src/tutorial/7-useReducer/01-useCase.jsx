import React, { useReducer } from "react";
import { data, people } from "../../data";
import "../1-useState/02-useState.css"
import {RESET_LIST,REMOVE_ITEM,TESTING_ITEM} from './action.js'
import reducer from "./reduce.js";

const defaultState = {
    people: data,
};


const List = () => {
    const [state, dispatch] = useReducer(reducer, defaultState);


    const resetList = () => {
        dispatch({
            type: RESET_LIST
        });
    }
    const removeItem = (id) => {
        dispatch({
            type: REMOVE_ITEM,
            payload: { id: id }
        })
    }


    return (

        <div className="wrapper">
            {state.people.map((item) => {
                const { id, name } = item;
                return (
                    <div key={id}>
                        <h1>{name}</h1>
                        <button className="btn" onClick={() => removeItem(id)}>Remove</button>
                    </div>
                );
            })
            }


            <button onClick={resetList}>Reset</button>


        </div>

    );
};


export default List;