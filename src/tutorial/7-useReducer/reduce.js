import { data } from "../../data";
import { RESET_LIST, REMOVE_ITEM } from './action.js'

const reducer = (state, action) => {
    console.log(action);

    switch (action.type) {
        case RESET_LIST:
            return {
                ...state,
                people: (state.people.length > 0 ? [] : data),
            }
        case REMOVE_ITEM:
            return {
                ...state,
                people: (state.people.filter((person) => person.id !== action.payload.id))
            }


        default:
             throw new Error(`Error : ${action.type} is not define`);
            
    }

}
export default reducer;