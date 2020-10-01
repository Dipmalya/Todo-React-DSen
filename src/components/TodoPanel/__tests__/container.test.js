import React from 'react';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';

import TodoPanel from '../container';
describe('TodoPanel Container', ()=> {
    const mockStore = configureMockStore();

    it('Test case to check redux store is connected to TodoPanel component', ()=> {
        const initialState = { todoList: [] }
        const store = mockStore(initialState)

        const wrapper = shallow(<TodoPanel store={store} />)
        expect(wrapper.exists()).toBe(true)
    })
})