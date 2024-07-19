import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: 1, text: "helloworld" }],
};

const fun = (state, action) => {
  console.log(action.payload, " from slice");
  const todo = { id: nanoid(), text: action.payload };
  state.todos.push(todo);
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: fun,
    // abhi jo state mei kya hai uska access "state" dega
    removeTodo: (state, action) => {
      const id = action.payload;
      state.todos = state.todos.filter((todo) => todo.id !== id);
    },
  },
});

// these are individual functionalities
export const { addTodo, removeTodo } = todoSlice.actions;

// it is callback function
export const getTodos = (state) => state.todo.todos;

export default todoSlice.reducer;
