import { ADD_TODO } from '../../config/actionTypes';

export const addTodoItem = value => {
    return (dispatch) => {
        dispatch(addTodoDispatcher(value))
    };
}

const addTodoDispatcher = (value) => ({
    type: ADD_TODO,
    payload: value
});