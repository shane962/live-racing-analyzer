import { Route, Switch } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import StreamlinedDashboard from "./pages/streamlined-dashboard";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Switch>
        <Route path="/" component={StreamlinedDashboard} />
      </Switch>
    </QueryClientProvider>
  );
}

export default App;
