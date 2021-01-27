import React, { useState } from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo';
function TodoList() {

    const [todos, setTodos] = useState([]);

    const addTodo = todo => {
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return;
        }

        const newTodos = [todo, ...todos];
        setTodos(newTodos);

    }

    const updateTodo = (todoId, newValue) => {
        if (!newValue || /^\s*$/.test(newValue)) {
            return;
        }
        let updatedTodo = todos.map((item) => (item.id === todoId ? newValue : item));
        setTodos(updatedTodo);
    }

    const completeTodo = (id) => {
        let updatedTodo = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete
            }

            return todo;
        })

        setTodos(updatedTodo);
    }

    const removeTodo = (id) => {
        let removeTodoArr = [...todos].filter(todo => todo.id !== id)
        setTodos(removeTodoArr);
    }

    return (
        <div>
            <h1>What is the plan for today</h1>
            <TodoForm onSubmit={addTodo} />
            <Todo todos={todos}
                completeTodo={completeTodo}
                removeTodo={removeTodo}
                updateTodo={updateTodo}
            />
        </div>
    )
}

export default TodoList
