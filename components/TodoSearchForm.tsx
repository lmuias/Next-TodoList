import React from 'react'
import Form from 'next/form';
import SubmitButton from './SubmitButton';

const TodoSearchForm = ({ query }: { query?: string }) => {
  return (
    <Form action="/" className='flex flex-col gap-5'>
      <div className='flex justify-between items-center gap-5'>
        <label htmlFor="search">Search some todo</label>
        <input
          id='search'
          defaultValue={query}
          name="query"
          placeholder='Search todo'
          className="p-4 border-indigo-600 border-2 rounded-md"
        />
      </div>
      <SubmitButton title='Find todo' />
    </Form>
  )
}

export default TodoSearchForm