import React, { useState, useCallback } from 'react';
import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList';

function App() {
    const [todos, setTodos] = useState([]);

    const addTodo = useCallback((text) => {
        setTodos([...todos, { text, completed: false }]);
    }, [todos]);

    const toggleTodo = useCallback((index) => {
        setTodos(
            todos.map((todo, i) =>
            i === index ? { ...todo, completed: !todo.completed } : todo
            )
        );
    }, [todos]);

    const deleteTodo = useCallback((index) => {
        setTodos(todos.filter((_, i) => i !== index));
    }, [todos]);

    const deleteCompletedTodos = useCallback(() => {
        setTodos(todos.filter((todo) => !todo.completed));
    }, [todos]);

    return (
        <div className="app">
        <h1>Список дел</h1>
        <AddTodoForm onAddTodo={addTodo} />
        <TodoList
        todos={todos}
        onToggleTodo={toggleTodo}
        onDeleteTodo={deleteTodo}
        />
        <button onClick={deleteCompletedTodos}>Удалить выполненные</button>
        </div>
    );
}

export default App;
