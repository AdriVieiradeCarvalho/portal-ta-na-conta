import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AtivarConta from "./pages/AtivarConta";
import SimularTaxas from "./pages/SimularTaxas";
import Tutoriais from "./pages/Tutoriais";
import Suporte from "./pages/Suporte";
import LinkPagamento from "./pages/LinkPagamento";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={() => <Layout><Home /></Layout>} />
      <Route path="/ativar-conta" component={() => <Layout><AtivarConta /></Layout>} />
      <Route path="/simular-taxas" component={() => <Layout><SimularTaxas /></Layout>} />
      <Route path="/link-pagamento" component={() => <Layout><LinkPagamento /></Layout>} />
      <Route path="/tutoriais" component={() => <Layout><Tutoriais /></Layout>} />
      <Route path="/tutoriais/plataforma-solar" component={() => <Layout><Tutoriais /></Layout>} />
      <Route path="/tutoriais/maquininha" component={() => <Layout><Tutoriais /></Layout>} />
      <Route path="/tutoriais/link-pagamento" component={() => <Layout><Tutoriais /></Layout>} />
      <Route path="/suporte" component={() => <Layout><Suporte /></Layout>} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
