import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import TodoPanel from './index';

import { deleteTodo } from './action';

const mapStateToProps = ({ todoList }) => ({
    todoList
});

const mapDispatchToProps = (dispatch) => ({
    deleteTodo: bindActionCreators(deleteTodo, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoPanel);