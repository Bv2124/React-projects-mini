import React, { useState } from 'react';
import './App.css';

export default function App() {
  const [newTodo, setNewTodo] = useState('');
  const [todos, setTodos] = useState([]);

  function handleNewTodoChange(event) {
    setNewTodo(event.target.value);
  }

  function handleNewTodoSubmit(event) {
    event.preventDefault();
    if (newTodo.trim() === '') return;
    setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
    setNewTodo('');
  }

  function handleTodoDelete(todoId) {
    setTodos(todos.filter((todo) => todo.id !== todoId));
  }

  function handleTodoToggleComplete(todoId) {
    setTodos(
      todos.map((todo) =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  return (
    <div className="todo-list-container">
      <h1>Todo List</h1>
      <form onSubmit={handleNewTodoSubmit}>
        <input
          type="text"
          placeholder="Add a new todo"
          value={newTodo}
          onChange={handleNewTodoChange}
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={todo.completed ? 'completed' : undefined}
          >
            <span>{todo.text}</span>
            <div>
              <button onClick={() => handleTodoToggleComplete(todo.id)}>
                {todo.completed ? 'Incomplete' : 'Complete'}
              </button>
              <button onClick={() => handleTodoDelete(todo.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

