import { useQuery, useMutation } from "react-query";
import axios from "axios";

const apiUrl = "http://localhost:4000/todos";

export function useFetchTodos() {
  return useQuery("todos", async () => {
    const response = await axios.get(apiUrl);
    return response.data;
  });
}

export function useAddTodo() {
  return useMutation(async (newTodo) => {
    const response = await axios.post(apiUrl, newTodo);
    return response.data;
  });
}

export function useUpdateTodo() {
  return useMutation(async ({ id, updatedTodo }) => {
    const response = await axios.put(`${apiUrl}/${id}`, updatedTodo);
    return response.data;
  });
}

export function useDeleteTodo() {
  return useMutation(async (id) => {
    await axios.delete(`${apiUrl}/${id}`);
    return id;
  });
}
