// TodoApp.js
import React, { useState } from "react";
import {
  useFetchTodos,
  useAddTodo,
  useUpdateTodo,
  useDeleteTodo,
} from "./TodoService";
import { QueryClient, QueryClientProvider } from "react-query";
import { TodoDiv } from "../styles/AllStyles";
import LoaderComp from "./Spinner";

const queryClient = new QueryClient();

function TodoList() {
  const { data: todos, isLoading, isError } = useFetchTodos();
  const addTodo = useAddTodo();
  const updateTodo = useUpdateTodo();
  const deleteTodo = useDeleteTodo();

  const [newTodo, setNewTodo] = useState("");
  const [editingTodo, setEditingTodo] = useState(null);
  const [editedText, setEditedText] = useState("");

  const handleAddTodo = async () => {
    if (newTodo.trim() === " ") {
      return;
    }
    await addTodo.mutateAsync({ todo: newTodo, completed: false });
    setNewTodo("");
    queryClient.invalidateQueries("todos");
  };

  const handleStartEditing = (todo) => {
    setEditingTodo(todo.id);
    setEditedText(todo.todo);
  };

  const handleCancelEditing = () => {
    setEditingTodo(null);
    setEditedText("");
  };

  const handleUpdateTodo = async (todo) => {
    await updateTodo.mutateAsync({ id: todo.id, updatedTodo: todo });
    setEditingTodo(null);
    setEditedText("");
    queryClient.invalidateQueries("todos");
  };

  const handleToggleCompleted = async (todo) => {
    await updateTodo.mutateAsync({
      id: todo.id,
      updatedTodo: { ...todo, completed: !todo.completed },
    });
    queryClient.invalidateQueries("todos");
  };

  const handleDeleteTodo = async (id) => {
    await deleteTodo.mutateAsync(id);
    queryClient.invalidateQueries("todos");
  };

  if (isLoading) {
    return <LoaderComp />;
  }

  if (isError) {
    return <div>Error fetching data</div>;
  }

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleAddTodo();
        }}
      >
        <input
          type="text"
          placeholder="Add a new todo"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
      <TodoDiv>
        {todos.map((todo) => (
          <div key={todo.id}>
            {editingTodo === todo.id ? (
              <div>
                <input
                  type="text"
                  value={editedText}
                  onChange={(e) => setEditedText(e.target.value)}
                />
                <button
                  onClick={() =>
                    handleUpdateTodo({ ...todo, todo: editedText })
                  }
                >
                  Save
                </button>
                <button onClick={handleCancelEditing}>Cancel</button>
              </div>
            ) : (
              <>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => handleToggleCompleted(todo)}
                />
                {todo.todo}
                <button onClick={() => handleDeleteTodo(todo.id)}>
                  Delete
                </button>
                <button onClick={() => handleStartEditing(todo)}>Edit</button>
              </>
            )}
          </div>
        ))}
      </TodoDiv>
    </div>
  );
}

export default function Wrapper() {
  return (
    <QueryClientProvider client={queryClient}>
      <TodoList />
    </QueryClientProvider>
  );
}
