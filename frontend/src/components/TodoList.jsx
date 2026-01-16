import React, { useState, useEffect } from 'react';
import { Check, Trash2, Plus, Loader2 } from 'lucide-react';

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchTodos();
    }, []);

    const fetchTodos = async () => {
        try {
            const response = await fetch('/todos');
            if (!response.ok) throw new Error('Failed to fetch todos');
            const data = await response.json();
            setTodos(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const addTodo = async (e) => {
        e.preventDefault();
        if (!newTodo.trim()) return;

        try {
            const response = await fetch('/todos', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ text: newTodo }),
            });
            if (!response.ok) throw new Error('Failed to add todo');
            const data = await response.json();
            setTodos([...todos, data]);
            setNewTodo('');
        } catch (err) {
            setError(err.message);
        }
    };

    const toggleTodo = async (id, completed, text) => {
        try {
            const response = await fetch(`/todos/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ completed: !completed, text }),
            });
            if (!response.ok) throw new Error('Failed to update todo');
            const updatedTodo = await response.json();
            setTodos(todos.map((t) => (t.id === id ? updatedTodo : t)));
        } catch (err) {
            setError(err.message);
        }
    };

    const deleteTodo = async (id) => {
        try {
            const response = await fetch(`/todos/${id}`, {
                method: 'DELETE',
            });
            if (!response.ok) throw new Error('Failed to delete todo');
            setTodos(todos.filter((t) => t.id !== id));
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <section className="py-24 bg-zinc-50 dark:bg-zinc-900/50">
            <div className="container px-4 mx-auto">
                <div className="max-w-2xl mx-auto">
                    <div className="mb-12 text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
                            Todo List
                        </h2>
                        <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
                            Manage your tasks efficiently.
                        </p>
                    </div>

                    <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-xl border border-zinc-200 dark:border-zinc-800 overflow-hidden">
                        <div className="p-6 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50">
                            <form onSubmit={addTodo} className="flex gap-4">
                                <input
                                    type="text"
                                    value={newTodo}
                                    onChange={(e) => setNewTodo(e.target.value)}
                                    placeholder="Add a new task..."
                                    className="flex-1 px-4 py-3 bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all placeholder:text-zinc-400"
                                />
                                <button
                                    type="submit"
                                    disabled={!newTodo.trim()}
                                    className="px-6 py-3 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-medium rounded-xl hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                                >
                                    <Plus className="w-5 h-5" />
                                    Add
                                </button>
                            </form>
                        </div>

                        <div className="divide-y divide-zinc-100 dark:divide-zinc-800">
                            {loading ? (
                                <div className="p-12 flex justify-center text-zinc-400">
                                    <Loader2 className="w-8 h-8 animate-spin" />
                                </div>
                            ) : todos.length === 0 ? (
                                <div className="p-12 text-center text-zinc-500 dark:text-zinc-400">
                                    No tasks yet. Add one above!
                                </div>
                            ) : (
                                todos.map((todo) => (
                                    <div
                                        key={todo.id}
                                        className="group flex items-center justify-between p-4 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors"
                                    >
                                        <div className="flex items-center gap-4 flex-1">
                                            <button
                                                onClick={() => toggleTodo(todo.id, todo.completed, todo.text)}
                                                className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${todo.completed
                                                    ? 'bg-green-500 border-green-500 text-white'
                                                    : 'border-zinc-300 dark:border-zinc-600 hover:border-green-500'
                                                    }`}
                                            >
                                                {todo.completed && <Check className="w-3.5 h-3.5" />}
                                            </button>
                                            <span
                                                className={`text-lg transition-all ${todo.completed
                                                    ? 'text-zinc-400 line-through decoration-zinc-300'
                                                    : 'text-zinc-700 dark:text-zinc-200'
                                                    }`}
                                            >
                                                {todo.text}
                                            </span>
                                        </div>
                                        <button
                                            onClick={() => deleteTodo(todo.id)}
                                            className="p-2 text-zinc-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-all"
                                            aria-label="Delete todo"
                                        >
                                            <Trash2 className="w-5 h-5" />
                                        </button>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>

                    {error && (
                        <div className="mt-4 p-4 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-xl text-sm text-center">
                            {error}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default TodoList;
