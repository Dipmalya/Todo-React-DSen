import React, { Component } from "react";
import TodoPanel from "../TodoPanel/container";

const { Home: data } = CONFIG;

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoText: '',
      currentView: "ALL",
    };
  }

  disableError = () => this.setState({ error: '' });

  renderHeader = () => (
    <div className="bg-dark py-4">
      <div className="text-white text-center container">
        <h1>{data.heading}</h1>
      </div>
    </div>
  );

  handleChangeInput = (event) => {
    const { target: { name, value } } = event;
    this.setState({ [name]: value });
  }

  handleBlurInput = (event) => {
    const { target: { value } } = event;
    const { input: { error } } = data;
    const { todoList } = this.props;
    const existingItem = todoList.find(todo => todo.task === value && todo.status === 'ACTIVE') || {};
    if (existingItem.id) {
      this.setState({ error });
    }
  }

  handleAddTodo = () => {
    const { todoText } = this.state;
    this.props.addTodoItem(todoText);
    this.setState({ todoText: '' });
  }

  renderInput = () => {
    const { input: { todoTextInput, todoBtnInput } } = data;
    const { text: btnText, className, iconClassName } = todoBtnInput;
    const { todoText, error = '' } = this.state;
    return (
      <>
        <input
          value={todoText}
          {...todoTextInput}
          onFocus={this.disableError}
          onChange={this.handleChangeInput}
          onBlur={this.handleBlurInput}
        />
        <button 
          className={className}
          disabled={!todoText || error}
          onClick={this.handleAddTodo}
        >
          {btnText}
          <i className={iconClassName}/>
        </button>
      </>
    );
  };

  handleViewToggle = (value) => {
    this.setState({ currentView: value });
  };

  render() {
    const { currentView, error } = this.state;
    const { todoList } = this.props;
    return (
      <div>
        {this.renderHeader()}
        <div className="d-flex col-md-4 offset-md-4 mt-md-5 mt-4">
          {this.renderInput()}
        </div>
        <div className="col-md-4 offset-md-4 error-text">{error}</div>
        <TodoPanel
          todoList={todoList}
          currentView={currentView}
          toggleView={this.handleViewToggle}
        />
      </div>
    );
  }
}

export default Home;
