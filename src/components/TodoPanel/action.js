import { DELETE_TODO, TOGGLE_TODO } from '../../config/actionTypes';

/**
 * Method to delete todo
 * @param {todoId} value 
 */
export const deleteTodo = value => {
    return (dispatch) => {
        dispatch(deleteTodoDispatcher(value))
    };
}

const deleteTodoDispatcher = (value) => ({
    type: DELETE_TODO,
    payload: value
});

/**
 * Method to toggle todo from active to complete
 * @param {todoId} value 
 */
export const toggleTodo = (id) => {
    return (dispatch) => {
        dispatch(toggleTodoDispatcher(id))
    };
}

const toggleTodoDispatcher = (id) => ({
    type: TOGGLE_TODO,
    payload: id
});