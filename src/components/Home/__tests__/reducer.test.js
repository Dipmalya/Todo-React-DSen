import { todoList } from '../reducer'

describe('Home Reducer', () => {
    const dummyPayload = { id: 'mockId', type: 'ADD_TODO', payload: 'Do next' };
    it('Test to check initial state is returned', () => {
        expect(todoList(undefined, {})).toEqual([]);
    });

    it('Test to check adding todo modifies state', () => {
        const mockReducer = todoList(undefined, dummyPayload);
        expect(mockReducer.length).toEqual(1);
    });

    it('Test to check deleting todo modifies state', () => {
        const mockReducer = todoList([dummyPayload], {
            type: 'DELETE_TODO',
            payload: 'Do next'
        });
        expect(mockReducer.length).toEqual(1);
    });

    it('Test to check toggling todo modifies state to ACTIVE', () => {
        const mockReducer = todoList([dummyPayload], {
            type: 'TOGGLE_TODO',
            payload: 'mockId',
            status: 'COMPLETED'
        });
        expect(mockReducer[0].status).toEqual('ACTIVE');
    });

    it('Test to check toggling todo modifies state to COMPLETED', () => {
        const initialState = { id: 'mockId', status: 'ACTIVE' }
        const mockReducer = todoList([initialState], {
            type: 'TOGGLE_TODO',
            payload: 'mockId',
        });
        expect(mockReducer[0].status).toEqual('COMPLETED');
    });
})