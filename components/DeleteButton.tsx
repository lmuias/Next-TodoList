"use client"

import { useAppDispatch } from '@/redux/hooks/hooks'
import { deleteOneTodo } from '@/redux/slices/todosSlice'
import React from 'react'

const DeleteButton = ({ todoId }: {todoId: string}) => {
  const dispatch = useAppDispatch();

  const handleDeleteTodo = async () => {
    await dispatch(deleteOneTodo(todoId));
  };

  return (
    <svg className='icons fill-red-500' onClick={handleDeleteTodo}>
      <use href='sprite.svg#icon-bin'></use>
    </svg>
  )
}

export default DeleteButton