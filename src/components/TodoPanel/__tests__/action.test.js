import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk'

import { deleteTodo, toggleTodo } from '../action';

const middlewares = [thunk]
const mockStore = configureStore(middlewares);
const store = mockStore({});

describe('TodoPanel Action Delete todo', () => {
    it('Test to check delete Todo action is dispatched', () => {
        const id = 'mockId'
        const expectedAction = {
            type: 'DELETE_TODO',
            payload: id
        };
        store.dispatch(deleteTodo(id));
        expect(store.getActions()[0]).toEqual(expectedAction)
    });
});

describe('TodoPanel Action Toggle todo', () => {
    it('Test to check toggle Todo action is dispatched', () => {
        const id = 'mockId'
        const expectedAction = {
            type: 'TOGGLE_TODO',
            payload: id
        };
        store.dispatch(toggleTodo(id));
        expect(store.getActions()[1]).toEqual(expectedAction)
    });
})