// src/App.jsx
import { useRoutes, Navigate } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { QueryClient, QueryClientProvider } from "react-query";
import { AnimatePresence, motion } from "framer-motion";
import LandingPage from "./Pages/LandingPage";
import AboutPage from "./Pages/AboutPage";
import PortfolioPage from "./Pages/PortfolioPage";
import AIProjectsPage from "./Pages/AIProjectsPage"; // New AI Projects page
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import "./App.css";

const queryClient = new QueryClient();

function App() {
  const routes = useRoutes([
    { path: "/", element: <LandingPage /> },
    { path: "/about", element: <AboutPage /> },
    { path: "/portfolio", element: <PortfolioPage /> },
    { path: "/ai", element: <AIProjectsPage /> }, // New route for AI projects
    { path: "*", element: <Navigate to="/" /> },
  ]);

  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <div className="app">
          <Header />
          {/* AnimatePresence for page transitions */}
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.3 }}
            >
              {routes}
            </motion.div>
          </AnimatePresence>
          <Footer />
        </div>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
