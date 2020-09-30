import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import TodoPanel from './index';

import { deleteTodo, toggleTodo } from './action';

const mapStateToProps = ({ todoList }) => ({
    todoList
});

const mapDispatchToProps = (dispatch) => ({
    deleteTodo: bindActionCreators(deleteTodo, dispatch),
    toggleTodo: bindActionCreators(toggleTodo, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoPanel);