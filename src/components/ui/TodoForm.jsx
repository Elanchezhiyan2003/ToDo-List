import { useState } from 'react';
import Input from './input';
import { Button } from './button';
import { useStore } from 'ToDo-List/src/store';

const TodoForm = () => {
    const [text, setText]=useState("");
    const addTodo = useStore(state => state.addTodo);
    
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(text.trim() !== ""){
          addTodo({text, completed: false})
            setText('')
            
        }
    };
  return (
    <form onSubmit={handleSubmit} className='flex justify-end gap-2'>
        <Input className='' type="text" value={text} onChange={(e)=> setText(e.target.value)} placeholder='Enter New TodoList'></Input>
        <Button className='bg-blue-600 text-white'>Add Todo</Button>
    </form>
  )
}

export default TodoForm;