import { createTodo, deleteTodo, getTodos, updateTodo } from "@/app/api/{fetch}/todosApi";
import { Todo } from "@/types/Todo";
import { TodoData } from "@/types/TodoData";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TodosState {
  todos: Todo[];
  loadingTodo: boolean;
  loadingError: string;
  creatingTodo: boolean; 
  creatingError: string;
  updatingTodo: boolean;
  updatingError: string;
  selectedTodo: Todo | null;
}

const initialState: TodosState = {
  todos: [],
  loadingTodo: false,
  loadingError: '',
  creatingTodo: false,
  creatingError: '',
  updatingTodo: false,
  updatingError: '',
  selectedTodo: null,
};

export const fetchTodos = createAsyncThunk('todos/fetchTodos', () => getTodos());
export const deleteOneTodo = createAsyncThunk('todos/deleteTodo', async (todoId: string) => deleteTodo(todoId));
export const createNewTodo = createAsyncThunk('todos/createNewTodo', async (todoData: TodoData) => createTodo(todoData));
export const updateOneTodo = createAsyncThunk('todos/updateTodo',
  async ({todoId, todo}: {todoId: string, todo: Todo}) => updateTodo(todoId, todo)
);


export const TodosSlice = createSlice({
  name: 'todos',
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {
    builder
    .addCase(fetchTodos.pending, state => {
      state.loadingTodo = true;
    })
    .addCase(fetchTodos.fulfilled, (state, action: PayloadAction<Todo[]>) => {
      return { ...state, todos: action.payload, loadingTodo: false };
    })
    .addCase(fetchTodos.rejected, state => {
      state.loadingError = 'Error loading todos';
      state.loadingTodo = false;
    })
    .addCase(createNewTodo.pending, state => {
      state.creatingTodo = true;
      state.creatingError = '';
    })
    .addCase(createNewTodo.fulfilled, (state, action: PayloadAction<Todo>) => {
      state.todos.push(action.payload);
      state.creatingTodo = false;
    })
    .addCase(createNewTodo.rejected, (state, action) => {
      state.creatingError = action.payload as string;
      state.creatingTodo = false;
    })
  },
});

export default TodosSlice.reducer;