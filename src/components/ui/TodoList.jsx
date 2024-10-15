import { useStore } from 'ToDo-List/src/store';
import { Button } from './button';
import React from 'react';

const TodoList = () => {
    const todos = useStore((state) => state.todos || []);
    const toggleTodo = useStore(state => state.toggleTodo);
    const deleteTodo = useStore(state => state.deleteTodo);

    return (
        <div>
            {
                todos.map((todo, index) => (
                    <div className='flex justify-center my-2 mx-32 h-34 w-34 px-20 py-0 border-0 gap-4' key={index}>
                        <span className={`${todo.completed ? 'completed' : ''} py-2`}>{todo.text}</span>
                        <Button className='bg-green-500' disabled={todo.completed} onClick={() => toggleTodo(index)}>
                            Complete
                        </Button>
                        <Button className='bg-red-500' onClick={() => deleteTodo(index)}>
                            Delete
                        </Button>
                    </div>
                ))
            }
        </div>
    );
};

export default TodoList;
