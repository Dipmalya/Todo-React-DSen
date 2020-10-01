import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

import TodoPanel from '../index';

const props = {
    todoList: [
        {
            id: 'bda37a11-6a12-40ec-9365-331a516194ea',
            task: 'Do next',
            status: 'ACTIVE'
        },
        {
            id: 'bda37a11-6a12-40ec-9365-331a516194ea',
            task: 'Do nothing',
            status: 'COMPLETED'
        }
    ],
    currentView: 'ALL',
    toggleView: jest.fn(),
    deleteTodo: jest.fn(),
    toggleTodo: jest.fn()
};
const mockEvent1 = {
    target: {
        id: 'bda37a11-6a12-40ec-9365-331a516194ea'
    }
};
const mockEvent2 = {
    target: {
        id: 'ACTIVE'
    }
};

describe('TodoPanel Component', () => {
    const wrapper = mount(<TodoPanel {...props} />);

    describe('Test suite to check component rendering', () => {
        it('Test to check TodoPanel component gets rendered successfully', () => {
            expect(wrapper.exists()).toBe(true);
        });
        
        it('Test to check snapshot of the component is validated', () => {
            const component = renderer.create(<TodoPanel {...props} />);
            const tree = component.toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('Test to check nav list gets rendered', () => {
            const dummyNavList = wrapper.find('ul[className="nav-list"]');
            expect(dummyNavList.exists()).toBe(true);
        });

        it('Test to check number of todo nav items is 3', () => {
            const dummyNavList = wrapper.find('ul[className="nav-list"]');
            expect(dummyNavList.find('li').length).toEqual(3);
        });

        it('Test to check todo panel gets rendered', () => {
            const dummyTodoPanel = wrapper.find('div[className="todo-panel"]');
            expect(dummyTodoPanel.exists()).toBe(true);
        });

        it('Test to check number of todo items matches the props', () => {
            const dummyTodoItems = wrapper.find('ol[className="todo-item"]');
            expect(dummyTodoItems.find('li').length).toEqual(props.todoList.length);
        });

        it('Test to check action buttons on todo items gets rendered', () => {
            const dummyTodoItems = wrapper.find('ol[className="todo-item"]');
            expect(dummyTodoItems.find('i').length).toEqual(props.todoList.length * 2);
        });
    });

    describe('Test suite to check todo items is displayed as per current panel', () => {
        it('Test to check number of todo items matches the current section', () => {
            wrapper.setProps({ currentView: 'COMPLETED' });
            const completedTodos = props.todoList.filter(todo => todo.status === 'COMPLETED');
            const dummyTodoItems = wrapper.find('ol[className="todo-item"]');
            expect(dummyTodoItems.find('li').length).toEqual(completedTodos.length);
        });

        it('Test to check number of todo items matches the current section', () => {
            wrapper.setProps({ currentView: 'ACTIVE' });
            const activeTodos = props.todoList.filter(todo => todo.status === 'ACTIVE');
            const dummyTodoItems = wrapper.find('ol[className="todo-item"]');
            expect(dummyTodoItems.find('li').length).toEqual(activeTodos.length);
        });
    });

    describe('Test suite to check todo functionalities', () => {
        it('Test to check toggle todo action is called', () => {
            const mockToggleTodo = jest.fn();
            wrapper.setProps({ toggleTodo: mockToggleTodo });
            const dummyToggleLink = wrapper.find('i[className=" item-icon fa fa-check-circle"]');
            dummyToggleLink.props().onClick();
            expect(mockToggleTodo).toBeCalled();
        });

        it('Test to check delete todo action is called', () => {
            const mockDeleteTodo = jest.fn();
            wrapper.setProps({ deleteTodo: mockDeleteTodo });
            const dummyDeleteLink = wrapper.find('i[className="item-icon text-danger fa fa-trash"]');
            dummyDeleteLink.props().onClick(mockEvent1);
            expect(mockDeleteTodo).toBeCalled();
        });
    });

    describe('Test suite to check panel gets modified on changing nav list', () => {
        it('Test to check nav panel is toggled', () => {
            const mockToggleView = jest.fn();
            wrapper.setProps({ toggleView: mockToggleView });
            const dummyNavLink = wrapper.find('li[id="ACTIVE"]');
            dummyNavLink.props().onClick(mockEvent2);
            expect(mockToggleView).toBeCalled();

            const dummyTodoItems = wrapper.find('ol[className="todo-item"]');
            expect(dummyTodoItems.find('li').length).toEqual(1);
        });

        it('Test to check empty nav panel displays no list', () => {
            wrapper.setProps({ todoList: [] });
            const dummyTodoItems = wrapper.find('ol[className="todo-item"]');
            expect(dummyTodoItems.find('li').length).toEqual(0);
        });
    });
});
