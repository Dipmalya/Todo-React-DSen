import { ADD_TODO } from '../../config/actionTypes';

/**
 * Method to add todo
 * @param {todo} value 
 */
export const addTodoItem = value => {
    return (dispatch) => {
        dispatch(addTodoDispatcher(value))
    };
}

const addTodoDispatcher = (value) => ({
    type: ADD_TODO,
    payload: value
});