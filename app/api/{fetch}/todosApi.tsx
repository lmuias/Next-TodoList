import { Todo } from "@/types/Todo";
import { TodoData } from "@/types/TodoData";
import axios from "axios";

export const getTodos = async () => {
  try {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_LOCAL_URL}`);
    return res.data as Todo[];
  } catch (error) {
    console.error('Error fetching todos:', error);
    throw error;
  }
};

export const getOneTodo = async (id: string) => {
  try {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_LOCAL_URL}/${id}`);
    return res.data as Todo;
  } catch(error) {
    console.error('Error fetching todo:', error);
    throw error;
  }
}

export const deleteTodo = async (id: string) => {
  try {
    const res = await axios.delete(`${process.env.NEXT_PUBLIC_LOCAL_URL}/${id}`)
    return res.status;
  } catch(error) {
    console.error('Failed to delete todo:', error);
    throw error;
  }
};

export const updateTodo = async (id: string, updatedTodo: Todo) => {
  try {
    const res = await axios.patch(`${process.env.NEXT_PUBLIC_LOCAL_URL}/${id}`, updatedTodo);
    return res.data as Todo;
  } catch(error) {
    console.error('Error updating todo:', error);
    throw error;
  }
};

export const createTodo = async (todoData: TodoData) => {
  try {
    const res = await axios.post(`${process.env.NEXT_PUBLIC_LOCAL_URL}`, todoData);
    return res.data as Todo;
  } catch(error) {
    console.error('Error creating todo:', error);
    throw error;
  }
};