import React, { Component } from "react";
import TodoPanel from "../TodoPanel/container";

const { Home: data } = CONFIG;

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentView: "ALL",
    };
  }

  renderHeader = () => (
    <div className="bg-dark py-4">
      <div className="text-white text-center container">
        <h1>{data.heading}</h1>
      </div>
    </div>
  );

  handleBlurInput = (event) => {
    const { target: { name, value } } = event;
    this.setState({ [name]: value });
  }

  handleAddTodo = () => {
    const { todoText } = this.state;
    this.props.addTodoItem(todoText);
    this.setState({ todoText: '' });
  }

  renderInput = () => {
    const { input: { todoTextInput, todoBtnInput } } = data;
    const { text: btnText, className, iconClassName } = todoBtnInput;
    const { todoText } = this.state;
    return (
      <>
        <input
          value={todoText}
          {...todoTextInput}
          onBlur={this.handleBlurInput}
        />
        <button 
          className={className}
          disabled={!todoText}
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
    const { currentView } = this.state;
    const { todoList } = this.props;
    return (
      <div>
        {this.renderHeader()}
        <div className="d-flex col-md-4 offset-md-4 mt-md-5 mt-4 form-group">
          {this.renderInput()}
        </div>
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
