import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="bg-dark py-4">
          <div className="text-white text-center container">
            <h1>ToDo List</h1>
          </div>
        </div>
        <div className="d-flex col-md-4 offset-md-4 mt-md-5 mt-4 form-group">
          <input
            type="text"
            className="form-control"
            id="task"
            placeholder="Add todo.."
          />
          <button className="btn btn-info ml-3">
            ADD <i className="fa fa-arrow-right"></i>
          </button>
        </div>
        <div className="col-md-7 offset-md-2 mt-5">
          <ul className="nav-list">
            <li className="selected-nav">ALL</li>
            <li>ACTIVE</li>
            <li>COMPLETED</li>
          </ul>
          <div className="todo-panel">
            <ol className="todo-item">
              {/* <div className="empty-list">No items <i className="fa fa-folder-open"></i></div> */}
              <li>Task1</li>
              <li>Task1</li>
              <li>Task1</li>
            </ol>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
