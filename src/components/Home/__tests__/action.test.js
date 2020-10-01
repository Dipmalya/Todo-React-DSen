import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk'

import { addTodoItem } from '../action';

const middlewares = [thunk]
const mockStore = configureStore(middlewares);
const store = mockStore({});

describe('Home Action', () => {
    it('Test to check add Todo action is dispatched', () => {
        const text = 'Code'
        const expectedAction = {
            type: 'ADD_TODO',
            payload: text
        };
        store.dispatch(addTodoItem(text));
        expect(store.getActions()[0]).toEqual(expectedAction)
    })
})