import React from 'react';

const TodoItem = React.memo(({ todo, onToggle, onDelete }) => {
    console.count('TodoItem render');

    return (
        <li>
        <input type="checkbox" checked={todo.completed} onChange={onToggle} />
        <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
        {todo.text}
        </span>
        <button onClick={onDelete}>Удалить</button>
        </li>
    );
});

export default TodoItem;
