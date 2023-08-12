import React, { useState } from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import './TodoApp.css';

const TodoApp = () => {
    const [todos, setTodos] = useState([]);

    const handleAdd = (text) => {
        const newTodo = { id: Date.now(), text, completed: false };
        setTodos([...todos, newTodo]);
    };

    const handleComplete = (id) => {
        const updatedTodos = todos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        );
        setTodos(updatedTodos);
    };

    const handleDelete = (id) => {
        const updatedTodos = todos.filter((todo) => todo.id !== id);
        setTodos(updatedTodos);
    };

    return (
        <div className="box">
            <h1>Todo List</h1>
            <TodoForm handleAdd={handleAdd} />
            <TodoList
                todos={todos}
                handleComplete={handleComplete}
                handleDelete={handleDelete}
            />
        </div>
    );
};

export default TodoApp;