import { Todo } from "@/types/Todo";
import { NextResponse } from "next/server";

export const generateStaticParams = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/todos`);
    
    if (!res.ok) {
      throw new Error(`Failed to fetch data: ${res.statusText}`);
    }
    
    const todos: Todo[] = await res.json();

    return todos.map((todo) => ({
      id: todo.id.toString(),
    }));

  } catch (error) {
    console.error("Error in generateStaticParams:", error);
    return [];
  }
};

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const { id } = await params;

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/${id}`);

    if (!response.ok) {
      throw new Error('Unable to receive data from outer API');
    }

    const todo = await response.json();

    return NextResponse.json(todo);
  } catch (error) {
    console.error('Error receiving data:', error);
    return NextResponse.json({ message: 'Unable to retrieve machine data' }, { status: 500 });
  }
}

export async function PATCH(request: Request, { params }: { params: { id: string } }) {
  const { id } = params;
  try {
    const body = await request.json();
    const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error('Failed to update todo');
    }

    const updatedTodo = await response.json();
    return NextResponse.json(updatedTodo, { status: 200 });
  } catch (error) {
    console.error('Error in PATCH handler:', error);
    return NextResponse.json(
      { message: 'Failed to update todo', error },
      { status: 500 }
    );
  }
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  const { id } = params;

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    
    if (!response.ok) {
      throw new Error('Failed to delete todo');
    }
    
    return NextResponse.json({status: 200})
  } catch(error) {
      console.error('Error in DELETE handler:', error);
      return NextResponse.json(
        { message: 'Failed to update todo', error },
        { status: 500 }
      );
  }
}