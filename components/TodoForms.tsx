import React from 'react'
import TodoCreateForm from './TodoCreateForm'
import TodoSearchForm from './TodoSearchForm'

const TodoForms = ({ query }: { query?: string }) => {
  return (
    <div className='flex flex-col gap-5'>
      <TodoCreateForm />
      <TodoSearchForm query={query} />
    </div>
  )
}

export default TodoForms