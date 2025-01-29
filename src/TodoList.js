import React from 'react';
import TodoItem from './TodoItem';

const TodoList = React.memo(({ todos, onToggleTodo, onDeleteTodo }) => {
    console.count('TodoList render');

    return (
        <ul>
        {todos.map((todo, index) => (
            <TodoItem
            key={index}
            todo={todo}
            onToggle={() => onToggleTodo(index)}
            onDelete={() => onDeleteTodo(index)}
            />
        ))}
        </ul>
    );
});

export default TodoList;
