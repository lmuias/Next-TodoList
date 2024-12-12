import { Todo } from '@/types/Todo';
import { NextResponse } from 'next/server';

export async function GET () {

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}`);
  
    if (!response.ok) {
      throw new Error('Unable to receive data from outer API');
    }
  
    const todos = await response.json() as Todo[];
  
  
    return NextResponse.json(todos);
  }  catch (error) {
    console.error('Error receiving data:', error);
    return NextResponse.json({ message: 'Unable to retrieve machine data' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}`);
    
    if (!res.ok) {
      throw new Error(`Failed to fetch data: ${res.statusText}`);
    }
    
    const todos: Todo[] = await res.json();

    const requestedBody = await request.json();
    const newTodo = { id: todos.length.toString(), ...requestedBody };

    const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTodo),
    })

    if (!response.ok) {
      throw new Error(`Failed to create todo: ${response.statusText}`);
    }

    const todo: Todo = await response.json();

    return NextResponse.json(todo, { status: 201 });

  } catch(error) {
      console.error("Error creating todo:", error);

      return NextResponse.json(
        { message: "Unable to create todo", error },
        { status: 500 }
      );
  }
  
}