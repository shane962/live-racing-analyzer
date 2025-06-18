import { Route, Switch } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import StreamlinedDashboard from "./pages/streamlined-dashboard";
import DirectBetfairTest from "./pages/direct-betfair-test";
import "./index.css";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Switch>
          <Route path="/" component={StreamlinedDashboard} />
          <Route path="/test-betfair" component={DirectBetfairTest} />
          <Route>404 Not Found</Route>
        </Switch>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
