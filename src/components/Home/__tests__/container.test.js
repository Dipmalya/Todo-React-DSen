import React from 'react';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';

import Home from '../container';
describe('Home Container', ()=> {
    const mockStore = configureMockStore();

    it('Test case to check redux store is connected to Home component', ()=> {
        const initialState = { todoList: [] }
        const store = mockStore(initialState)

        const wrapper = shallow(<Home store={store} />)
        expect(wrapper.exists()).toBe(true)
    })
})