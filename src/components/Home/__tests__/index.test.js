import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

import Home from '../index';

jest.mock("../../TodoPanel/container");

const props = {
    todoList: [
        {
            id: 'bda37a11-6a12-40ec-9365-331a516194ea',
            task: 'Do next',
            status: 'ACTIVE'
        }
    ],
    addTodoItem: jest.fn()
};
const mockEvent = {
    target: {
        name: 'todoText',
        value: 'mockValue'
    }
};

describe('Home Component', () => {
    const wrapper = mount(<Home {...props} />);

    describe('Test suite to check component rendering', () => {
        it('Test to check Home component gets rendered successfully', () => {
            expect(wrapper.exists()).toBe(true);
        });
    
        it('Test to check snapshot of the component is validated', () => {
            const component = renderer.create(<Home {...props} />);
            const tree = component.toJSON();
            expect(tree).toMatchSnapshot();
        });
    
        it('Test to check input field gets rendered', () => {
            const dummyTodoInput = wrapper.find('input[id="task"]');
            expect(dummyTodoInput.exists()).toBe(true);
        });
    
        it('Test to check Add button gets rendered', () => {
            const dummyTodoBtn = wrapper.find('button[className="btn btn-info ml-3"]');
            expect(dummyTodoBtn.exists()).toBe(true);
        });
    });

    describe('Test suite to check UI functionality', () => {
        it('Test to check todo is added on inputting value', () => {
            const dummyTodoBtn = wrapper.find('input[id="task"]');
            dummyTodoBtn.props().onChange(mockEvent);
            expect(wrapper.instance().state.todoText).toEqual('mockValue');
        });
    
        it('Test to check action method is called on button click', () => {
            const mockAddTodo = jest.fn();
            wrapper.setProps({ addTodoItem: mockAddTodo });
            const dummyTodoBtn = wrapper.find('button[className="btn btn-info ml-3"]');
            dummyTodoBtn.props().onClick();
            expect(mockAddTodo).toBeCalled();
        });

        it('Test to check user views ALL todo by default', () => {
            expect(wrapper.instance().state.currentView).toEqual('ALL');
        });
    
        it('Test to check validation if todo exists and error is thrown', () => {
            const sameTodo = {
                target: {
                    name: 'todoText',
                    value: 'Do next'
                }
            };
            const dummyTodoBtn = wrapper.find('input[id="task"]');
            dummyTodoBtn.props().onBlur(sameTodo);
            expect(wrapper.instance().state.error).toBeTruthy();
        });

        it('Test to check error is disabled on focus of input', () => {
            const dummyTodoBtn = wrapper.find('input[id="task"]');
            dummyTodoBtn.props().onFocus();
            expect(wrapper.instance().state.error).toEqual('');
        });
    })
});
