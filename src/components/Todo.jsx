import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo } from '../redux/todo/todoactions';

const Todo = () => {
  const todoDispatch = useDispatch();
  return <div>
    <li className='todo-item' onClick={() => todoDispatch(toggleTodo())}>
        {}
    </li>

  </div>;
};

export default Todo;
