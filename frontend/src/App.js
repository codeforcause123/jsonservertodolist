import "./App.css";
import Wrapper from "./components/TodoApp";
import PageTitle from "./components/PageTitle";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-yellow-200 to-yellow-500">
        <PageTitle />
        <Wrapper />
      </div>
      <ReactQueryDevtools initialIsOpem={false} position="bottom-right" />
    </QueryClientProvider>
  );
}

export default App;
