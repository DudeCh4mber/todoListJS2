import React, { useState, useCallback } from 'react';

const AddTodoForm = React.memo(({ onAddTodo }) => {
    const [text, setText] = useState('');

    const handleSubmit = useCallback((e) => {
        e.preventDefault();
        onAddTodo(text);
        setText('');
    }, [onAddTodo, text]);

    console.count('AddTodoForm render');

    return (
        <form onSubmit={handleSubmit}>
        <input
        type="text"
        placeholder="Добавить новое дело"
        value={text}
        onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">Добавить</button>
        </form>
    );
});

export default AddTodoForm;
