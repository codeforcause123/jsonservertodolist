// TodoApp.js
import React, { useState } from "react";
import {
  useFetchTodos,
  useAddTodo,
  useUpdateTodo,
  useDeleteTodo,
} from "./TodoService";
import { QueryClient, QueryClientProvider } from "react-query";
import {
  CancelButton,
  DeleteButton,
  EditButton,
  SaveButton,
  TodoItem
} from "../styles/AllStyles";
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
        className="w-1/2 mx-auto mb-8"
        onSubmit={(e) => {
          e.preventDefault();
          handleAddTodo();
        }}
      >
        <div className="relative">
          <input
            type="text"
            placeholder="Add a new todo"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          <button
            type="submit"
            className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add
          </button>
        </div>
      </form>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="mx-auto w-1/2 text-sm text-left text-gray-500 dark:text-gray-400">
          <tbody>
            {todos.map((todo) => (
              <tr
                key={todo.id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 h-24"
              >
                <td className="px-4 rounded-l-md">
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => handleToggleCompleted(todo)}
                    className="accent-orange-300"
                  />
                </td>
                <td className="text-center">
                  {editingTodo === todo.id ? (
                    <div>
                      <input
                        type="text"
                        value={editedText}
                        onChange={(e) => setEditedText(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      />
                    </div>
                  ) : (
                    <TodoItem className="text-white">{todo.todo}</TodoItem>
                  )}
                </td>
                <td>
                  {editingTodo === todo.id ? (
                    <div>
                      <SaveButton
                        onClick={() =>
                          handleUpdateTodo({ ...todo, todo: editedText })
                        }
                      >
                        Save
                      </SaveButton>
                      <CancelButton onClick={handleCancelEditing}>
                        Cancel
                      </CancelButton>
                    </div>
                  ) : (
                    <EditButton onClick={() => handleStartEditing(todo)}>
                      Edit
                    </EditButton>
                  )}
                </td>
                <td className="rounded-r-md">
                  <DeleteButton onClick={() => handleDeleteTodo(todo.id)}>
                    Delete
                  </DeleteButton>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
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
