import { combineReducers } from 'redux';
import { todoList } from './Home/reducer';

const rootReducer = combineReducers({
    todoList
});

export default rootReducer