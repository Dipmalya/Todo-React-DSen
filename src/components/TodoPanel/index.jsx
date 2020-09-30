import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";

const { Home: data } = CONFIG;

class TodoPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: this.props.todoList,
    };
  }

  static getDerivedStateFromProps(props) {
    const { currentView, todoList } = props;
    if (currentView === "ALL") {
      return {
        list: todoList,
      };
    } else {
      return {
        list: todoList.filter((item) => item.status === currentView),
      };
    }
  }

  onClickHandler = (event) => {
    const {
      target: { id },
    } = event;
    this.props.toggleView(id);
  };

  onRemoveHandler = (event) => {
    const {
      target: { id },
    } = event;
    this.props.deleteTodo(id);
  }

  onToggleHandler = (id) => this.props.toggleTodo(id);

  render() {
    const { currentView } = this.props;
    const { panelTypes, emptyPanel } = data;
    const { list } = this.state;

    return (
      <div className="col-md-7 offset-md-2 mt-5">
        <ul className="nav-list">
          {panelTypes.map((type) => (
            <li
              id={type}
              key={uuidv4()}
              className={type === currentView ? "selected-nav" : ""}
              onClick={this.onClickHandler}
            >
              {type}
            </li>
          ))}
        </ul>
        <div className="todo-panel">
          <ol className="todo-item">
            {list.length === 0 && (
              <div className="empty-list">
                {emptyPanel}
                <i className="ml-2 fa fa-folder-open"></i>
              </div>
            )}
            {list.map(({ id, task, status }) => (
              <li key={uuidv4()}>
                {task}
                <span className="float-right">
                  <i 
                    className={`${status === 'COMPLETED' ? 'text-success' : ''} item-icon fa fa-check-circle`}
                    onClick={this.onToggleHandler.bind(this, id)}
                  />
                  <i
                    id={id}
                    className="item-icon text-danger fa fa-trash"
                    onClick={this.onRemoveHandler}
                  />
                </span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default TodoPanel;
