import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { lazy, Suspense } from "react";

// Streamlined core pages
import StreamlinedDashboard from "@/pages/streamlined-dashboard";
const DirectBetfairTest = lazy(() => import("@/pages/direct-betfair-test"));
const LiveBetfairDirect = lazy(() => import("@/pages/live-betfair-direct"));
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={StreamlinedDashboard} />
      <Route path="/test-betfair">
        <Suspense fallback={<div className="flex items-center justify-center h-screen">Loading...</div>}>
          <DirectBetfairTest />
        </Suspense>
      </Route>
      <Route path="/live-racing">
        <Suspense fallback={<div className="flex items-center justify-center h-screen">Loading...</div>}>
          <LiveBetfairDirect />
        </Suspense>
      </Route>
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
