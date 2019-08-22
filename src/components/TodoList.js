import React from "react";
import {connect} from 'react-redux'

const TodoItem = ({ id, name, isComplete }) => (
  <li key={id}>
    <input type="checkbox" defaultChecked={isComplete} /> {name}
  </li>
);

const TodoList = props => (
  <div className="Todo-List">
    <ul>
      {props.todos.map(todo => (
        <TodoItem {...todo} />
      ))}
    </ul>
  </div>
);

export default connect(
  (state) => ({todos: state.todos})
)(TodoList)
