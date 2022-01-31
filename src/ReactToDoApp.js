import logo from './logo.svg';
import './App.css';
import AddTodo from './components/AddTodo';
import FilterTodo from './components/FilterTodo'
import TodoList from './components/TodoList'



function ReactToDoApp() {
  return (
    <div className="todo_app">
      <h1>Todo List</h1>
      <AddTodo/>
      <TodoList/>
      <FilterTodo/>
      
      
    </div>
  );
}

export default ReactToDoApp;
