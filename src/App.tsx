import { Switch, Route } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Services from "@/pages/services";
import OurPhilosophy from "@/pages/philosophy";
import Insurance from "@/pages/insurance";
import FAQs from "@/pages/faqs";
import Resources from "@/pages/resources";
import BlogHarmReduction from "@/pages/blog-harm-reduction";
import Contact from "@/pages/contact";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/services" component={Services} />
      <Route path="/our-philosophy" component={OurPhilosophy} />
      <Route path="/insurance" component={Insurance} />
      <Route path="/faqs" component={FAQs} />
      <Route path="/resources" component={Resources} />
      <Route path="/blog-posts/harm-reduction-in-substance-use-disorder-treatment-kasama-philly" component={BlogHarmReduction} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Router />
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
