import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, useLocation } from "wouter";
import { useEffect } from "react";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import PrimeiroAcessoConta from "./pages/PrimeiroAcessoConta";
import PrimeiroAcessoPortal from "./pages/PrimeiroAcessoPortal";
import PrimeiroAcessoMaquininha from "./pages/PrimeiroAcessoMaquininha";
import SimularTaxas from "./pages/SimularTaxas";
import Tutoriais from "./pages/Tutoriais";
import Suporte from "./pages/Suporte";
import PoliticaPrivacidade from "./pages/PoliticaPrivacidade";
import ConhecaSolar from "./pages/ConhecaSolar";
import ConhecaDistribuidor from "./pages/ConhecaDistribuidor";

function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);
  return null;
}

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
    <>
      <ScrollToTop />
      <Switch>
      <Route path="/" component={() => <Layout><Home /></Layout>} />
      {/* Primeiro Acesso */}
      <Route path="/primeiro-acesso/conta" component={() => <Layout><PrimeiroAcessoConta /></Layout>} />
      <Route path="/primeiro-acesso/portal" component={() => <Layout><PrimeiroAcessoPortal /></Layout>} />
      {/* Maquininha - página própria */}
      <Route path="/primeiro-acesso/maquininha" component={() => <Layout><PrimeiroAcessoMaquininha /></Layout>} />
      {/* Rota legada de ativar-conta redireciona para conta */}
      <Route path="/ativar-conta" component={() => <Layout><PrimeiroAcessoConta /></Layout>} />
      {/* Simulador */}
      <Route path="/simular-taxas" component={() => <Layout><SimularTaxas /></Layout>} />
      {/* Tutoriais - rota dinâmica com parâmetro :tipo */}
      <Route path="/tutoriais" component={() => <Layout><Tutoriais /></Layout>} />
      <Route path="/tutoriais/:tipo" component={() => <Layout><Tutoriais /></Layout>} />
      {/* Conheça */}
      <Route path="/conheca/solar" component={() => <Layout><ConhecaSolar /></Layout>} />
      <Route path="/conheca/distribuidor" component={() => <Layout><ConhecaDistribuidor /></Layout>} />
      {/* Suporte */}
      <Route path="/suporte" component={() => <Layout><Suporte /></Layout>} />
      {/* Política de Privacidade */}
      <Route path="/politica-de-privacidade" component={() => <Layout><PoliticaPrivacidade /></Layout>} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
      </Switch>
    </>
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
