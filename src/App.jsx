import { useRoutes, Navigate } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { QueryClient, QueryClientProvider } from "react-query";
import { AnimatePresence, motion } from "framer-motion";
import LandingPage from "./Pages/LandingPage";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import AboutPage from "./Pages/AboutPage";
import "./App.css";
import PortfolioPage from "./Pages/PortfolioPage";

// Create a QueryClient instance for react-query
const queryClient = new QueryClient();

function App() {
  // Define routes using useRoutes for a cleaner approach
  const routes = useRoutes([
    { path: "/", element: <LandingPage /> },
    { path: "/about", element: <AboutPage /> },
    { path: "/portfolio", element: <PortfolioPage /> },
    { path: "*", element: <Navigate to="/" /> },
  ]);

  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <div className="app">
          <Header />
          {/* AnimatePresence enables animations when routes change */}
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
