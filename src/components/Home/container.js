import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import Home from './index';

import { addTodoItem } from './action';

const mapStateToProps = ({ todoList }) => ({
    todoList
});

const mapDispatchToProps = (dispatch) => ({
    addTodoItem: bindActionCreators(addTodoItem, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);