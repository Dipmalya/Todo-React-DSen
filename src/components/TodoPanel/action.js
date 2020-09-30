import { DELETE_TODO } from '../../config/actionTypes';

export const deleteTodo = value => {
    return (dispatch) => {
        dispatch(deleteTodoDispatcher(value))
    };
}

const deleteTodoDispatcher = (value) => ({
    type: DELETE_TODO,
    payload: value
});