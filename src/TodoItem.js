import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';

const TodoItem = ({ todo, handleComplete, handleDelete }) => {
    return (
        <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => handleComplete(todo.id)}
            />
            <p>{todo.text}</p>
            <button onClick={() => handleDelete(todo.id)}>
                <DeleteIcon />
            </button>
        </div>
    );
};

export default TodoItem;
