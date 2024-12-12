"use client"

import { useAppDispatch } from '@/redux/hooks/hooks';
import { updateOneTodo } from '@/redux/slices/todosSlice';
import { Todo } from '@/types/Todo';
import React from 'react'

const CompletedToggleButton = ({ todo }: { todo: Todo}) => {
  const dispatch = useAppDispatch();


  const toggleCompleted = async () => {
    const newTodo = {...todo, completed: !todo.completed};

    try {
      await dispatch(updateOneTodo({todoId: todo.id, todo: newTodo}))
    } catch(error) {
      console.error('Error creating todo:', error);
    }
  };

  return (
    <button
      onClick={() => toggleCompleted()} 
      type='button' 
      className={`w-6 h-6 rounded-full border-2 border-black transition-opacity ${todo.completed ? 'toggle-button-completed' : ''}`}
    ></button>
  )
}

export default CompletedToggleButton