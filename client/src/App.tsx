import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Header from "@/components/layout/header";
import FloatingBackground from "@/components/layout/floating-background";
import Home from "@/pages/home";
import WhoWeAre from "@/pages/who-we-are";
import WhatWeDo from "@/pages/what-we-do";
import OurTeam from "@/pages/our-team";
import Contact from "@/pages/contact";
import NotFound from "@/pages/not-found";
import { useScrollToTop } from "@/hooks/use-scroll-to-top";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/who-we-are" component={WhoWeAre} />
      <Route path="/what-we-do" component={WhatWeDo} />
      <Route path="/our-team" component={OurTeam} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  useScrollToTop();

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="min-h-screen bg-kujali-dark text-white relative overflow-x-hidden">
          <FloatingBackground />
          <Header />
          <main>
            <Router />
          </main>
          <Toaster />
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
