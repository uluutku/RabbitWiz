// src/App.jsx
import { useRoutes, Navigate, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { QueryClient, QueryClientProvider } from "react-query";
import { AnimatePresence, motion } from "framer-motion";
// Pages
import LandingPage from "./Pages/LandingPage";
import AboutPage from "./Pages/AboutPage";
import PortfolioPage from "./Pages/PortfolioPage";
import TheRabbitWayPage from "./Pages/TheRabbitWayPage";
// Components
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import "./App.css";
import SorcerersSandbox from "./Pages/SorcerersSandbox";

const queryClient = new QueryClient();

// "Magical Conjure" transition variants
const conjureVariants = {
  initial: {
    opacity: 0,
    scale: 0.94,
    y: 20,
    filter: "blur(6px)" // Subtle blur as if out of focus
  },
  animate: {
    opacity: 1,
    scale: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      // Spring on y for slight mystical bounce
      y: { type: "spring", stiffness: 75, damping: 15 },
      opacity: { duration: 0.3 },
      scale: { duration: 0.3 }
    }
  },
  exit: {
    opacity: 0,
    scale: 1.02,
    y: -20,
    filter: "blur(4px)",
    transition: {
      duration: 0.4,
      ease: "easeIn"
    }
  }
};

function App() {
  const location = useLocation();

  const routes = useRoutes([
    { path: "/", element: <LandingPage /> },
    { path: "/about", element: <AboutPage /> },
    { path: "/portfolio", element: <PortfolioPage /> },
    { path: "/sorcerers-sandbox", element: <SorcerersSandbox /> },
    { path: "/the-rabbit-way", element: <TheRabbitWayPage /> },
    { path: "*", element: <Navigate to="/" /> }
  ]);

  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <div className="app">
          <Header />
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              variants={conjureVariants}
              initial="initial"
              animate="animate"
              exit="exit"
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
