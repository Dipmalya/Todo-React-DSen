import { ADD_TODO, DELETE_TODO, TOGGLE_TODO } from '../../config/actionTypes';
import { v4 as uuidv4 } from "uuid";

const { COMPLETED, ACTIVE } = CONSTANT;

export const todoList = (state = [], {type, payload}) => {
    switch(type) {
        case ADD_TODO: {
            return [ ...state, { id: uuidv4(), task: payload, status: ACTIVE } ]
        };
        case DELETE_TODO: {
            return state.filter(item => item.id !== payload);
        }
        case TOGGLE_TODO: {
            return state.map(todo => {
                const { status: currentStatus } = todo;
                return (
                    todo.id === payload ? 
                    { ...todo, status: currentStatus === ACTIVE ? COMPLETED : ACTIVE } : todo
                )
            });
        }
        default: {
            return state;
        }
    }
}