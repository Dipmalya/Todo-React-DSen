import { ADD_TODO, DELETE_TODO, TOGGLE_TODO } from '../../config/actionTypes';
import { v4 as uuidv4 } from "uuid";

export const todoList = (state = [], {type, payload}) => {
    switch(type) {
        case ADD_TODO: {
            return [ ...state, { id: uuidv4(), task: payload, status: 'ACTIVE' } ]
        };
        case DELETE_TODO: {
            return state.filter(item => item.id !== payload);
        }
        case TOGGLE_TODO: {
            const currentItem = state.find(item => item.id === payload);
            const newState = state.filter(item => item.id !== payload);
            const { status } = currentItem;
            currentItem.status = status === 'ACTIVE' ? 'COMPLETED' : 'ACTIVE';
            return [ ...newState, currentItem ];
        }
    }
    return state;
}