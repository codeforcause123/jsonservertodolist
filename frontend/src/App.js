import "./App.css";
import Wrapper from "./components/TodoApp";
import PageTitle from "./components/PageTitle";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App bg-gradient-to-r from-yellow-200 via-green-200 to-green-300">
        <PageTitle />
        <Wrapper />
      </div>
      <ReactQueryDevtools initialIsOpem={false} position="bottom-right" />
    </QueryClientProvider>
  );
}

export default App;
