"use client"

import React, { useEffect } from 'react'
import TodoItem from './TodoItem'
import { useAppDispatch, useAppSelector } from '@/redux/hooks/hooks'
import { fetchTodos } from '@/redux/slices/todosSlice'

const TodoList = ({ query }: { query: string | undefined }) => {
  const { todos } = useAppSelector((state) => state.todos)

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch, todos]);

  const visibleTodos = query
    ? todos.filter(
        (todo) =>
          todo.title.toLowerCase().includes(query.toLowerCase()) ||
          todo.description.toLowerCase().includes(query.toLowerCase())
      )
    : todos;

  return (
    <div className='flex gap-5 flex-col w-full max-w-[1024] px-5'>
      {visibleTodos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  )
}

export default TodoList