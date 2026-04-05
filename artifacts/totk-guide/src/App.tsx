import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Walkthrough from "@/pages/walkthrough";
import Shrines from "@/pages/shrines";
import Weapons from "@/pages/weapons";
import Shields from "@/pages/shields";
import Bows from "@/pages/bows";
import Gear from "@/pages/gear";
import Secrets from "@/pages/secrets";
import HiddenAreas from "@/pages/hidden";
import InteractiveMap from "@/pages/map";
import { Layout } from "@/components/layout/Shell";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/walkthrough" component={Walkthrough} />
      <Route path="/shrines" component={Shrines} />
      <Route path="/weapons" component={Weapons} />
      <Route path="/shields" component={Shields} />
      <Route path="/bows" component={Bows} />
      <Route path="/gear" component={Gear} />
      <Route path="/secrets" component={Secrets} />
      <Route path="/hidden" component={HiddenAreas} />
      <Route path="/map" component={InteractiveMap} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Layout>
            <Router />
          </Layout>
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
