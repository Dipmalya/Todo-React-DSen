import { DELETE_TODO, TOGGLE_TODO } from '../../config/actionTypes';

export const deleteTodo = value => {
    return (dispatch) => {
        dispatch(deleteTodoDispatcher(value))
    };
}

const deleteTodoDispatcher = (value) => ({
    type: DELETE_TODO,
    payload: value
});

export const toggleTodo = (id) => {
    return (dispatch) => {
        dispatch(toggleTodoDispatcher(id))
    };
}

const toggleTodoDispatcher = (id) => ({
    type: TOGGLE_TODO,
    payload: id
});