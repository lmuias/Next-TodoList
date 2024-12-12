import { Todo } from '@/types/Todo'
import React, { useState } from 'react'
import CompletedToggleButton from './CompletedToggleButton'
import DeleteButton from './DeleteButton'
import EditButton from './EditButton'
import Form from 'next/form'
import { useAppDispatch } from '@/redux/hooks/hooks'
import { updateOneTodo } from '@/redux/slices/todosSlice'

const TodoItem = ({todo }: {todo: Todo}) => {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useAppDispatch();

  const handleUpdateTodo = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formElement = e.currentTarget;
    const formData = new FormData(formElement);

    const updatedTodo: Todo = {
      ...todo,
      title: formData.get('title')?.toString() || '',
      description: formData.get('descr')?.toString() || '',
    };

    try {
        dispatch(updateOneTodo({todoId: todo.id, todo: updatedTodo}))
        formElement.reset();
        setIsEditing(false);
    } catch(error) {
      console.error('Error creating todo:', error);
    }
  };

  return (
    <div className={`flex items-center gap-2 transition-opacity ${todo.completed ? 'opacity-50' : ''}`}>
      <CompletedToggleButton todo={todo} />
      <Form 
        action='/' 
        className='border-2 border-black rounded-md w-full' 
        onSubmit={(e) => {handleUpdateTodo(e)}}
      >
        <div className='p-3 bg-indigo-300 flex justify-between items-center'>
        {isEditing ? (
            <input
              name='title'
              defaultValue={todo.title}
              className='outline-none font-medium px-3 border-2 border-black rounded-md'
              required
            />
          ) : (
            <p className='font-bold uppercase text-white outline-none bg-transparent'>{todo.title}</p>
          )}
          <div className='flex items-center gap-2'>
            {isEditing && (
              <div className='flex items-center gap-2'>
                <button 
                  type='submit' 
                  className='confirm-buttons bg-green-400'
                >
                  Save
                </button>
                <button 
                  type='button' 
                  className='confirm-buttons bg-red-400'
                  onClick={() => setIsEditing(false)}
                >
                  Cancel
                </button>
              </div>
            )}
            <DeleteButton todoId={todo.id} />
          </div>
        </div>
        <div className='p-3 flex justify-between items-center'>
          <div className='flex gap-1'>
            <p className='font-bold'>Description:</p>
            {isEditing ? (
              <input
                name='descr' 
                defaultValue={todo.description} 
                className='outline-none px-3 rounded-md border-2 border-black'
                required
              />
            ) : (
              <p>{todo.description}</p>
            )}
          </div>
          <EditButton setIsEditing={setIsEditing} />
        </div>
      </Form>
    </div>
  )
}

export default TodoItem