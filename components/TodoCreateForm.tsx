"use client";

import Form from 'next/form';
import React, { useState } from 'react'
import SubmitButton from './SubmitButton';
import { useAppDispatch } from '@/redux/hooks/hooks';
import { createNewTodo } from '@/redux/slices/todosSlice';

const TodoCreateForm = () => {
  const [creatingError, setCreatingError] = useState({
    title: '',
    description: '',
  });
  
  const dispatch = useAppDispatch();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formElement = e.currentTarget;
    const formData = new FormData(formElement);

    const todoData = {
      title: formData.get('title')?.toString() || '',
      description: formData.get('descr')?.toString() || '',
      complited: false,
    }

    let hasError = false;
    const errors = {
      title: '',
      description: '',
    };

    if (!todoData.title) {
      errors.title = 'Title is required';
      hasError = true;
    }
  
    if (!todoData.description) {
      errors.description = 'Description is required';
      hasError = true;
    }
  
    if (hasError) {
      setCreatingError(errors);
      return;
    }

    try {
      await dispatch(createNewTodo(todoData));

      formElement.reset();
      setCreatingError({
        title: '',
        description: '',
      });
    } catch(error) {
      console.error('Error creating todo:', error);
    }

  }

  return (
    <Form
      action="submit" 
      onSubmit={(e) => handleSubmit(e)}
      className='flex flex-col gap-5'
    >
      <div className='grid-inputs-block'>
        <label htmlFor="title" className='font-bold'>Title</label>
        <input
          id='title'
          placeholder='Write todo title' 
          className={`input-styles ${creatingError.title && 'error-color' }`}
          name='title'
        />
        {creatingError.title && (
          <p className='todos-error-notification'>{creatingError.title}</p>
        )}
      </div>
      <div className='grid-inputs-block'>
        <label htmlFor="descr" className='font-bold'>Description</label>
        <input
          id='descr'
          placeholder='Write todo description' 
          className={`input-styles ${creatingError.title && 'error-color' }`}
          name='descr'
        />
        {creatingError.description && (
          <p className='todos-error-notification'>{creatingError.description}</p>
        )}
      </div>
      <SubmitButton title='Create todo'/>
    </Form>
  )
}

export default TodoCreateForm