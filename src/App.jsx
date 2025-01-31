import React, { useEffect, useState, Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Toaster } from "react-hot-toast";

// Lazy load pages for performance optimization
const Landing = lazy(() => import("./pages/Landing/Landing"));
const Login = lazy(() => import("./pages/Auth/Login"));
const Register = lazy(() => import("./pages/Auth/Register"));
const EmailVerification = lazy(() => import("./pages/Auth/EmailVerification"));
const SetupOrganization = lazy(() => import("./pages/Onboarding/SetupOrganization"));
const ScrapingProgress = lazy(() => import("./pages/Onboarding/ScrapingProgress"));
const ChatbotIntegration = lazy(() => import("./pages/Onboarding/ChatbotIntegration"));
const IntegrationSuccess = lazy(() => import("./pages/Onboarding/IntegrationSuccess"));
const IntegrationFailure = lazy(() => import("./pages/Onboarding/IntegrationFailure"));
const AdminDashboard = lazy(() => import("./pages/AdminPanel/AdminDashboard"));

export default function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-center" reverseOrder={false} />
      <Suspense fallback={<LoadingScreen />}>
        <AnimatedRoutes />
      </Suspense>
    </BrowserRouter>
  );
}

// Animated Page Routing
function AnimatedRoutes() {
  const location = useLocation();
  const navigate = useNavigate();
  const [hasSeenLanding, setHasSeenLanding] = useState(false);

  useEffect(() => {
    // Check if the user has already seen the landing page
    const seenLanding = localStorage.getItem("hasSeenLanding");

    if (seenLanding) {
      setHasSeenLanding(true);
      navigate("/login"); // Redirect to login page if user has already seen landing page
    }
  }, [navigate]);

  const handleLandingVisit = () => {
    localStorage.setItem("hasSeenLanding", "true");
    setHasSeenLanding(true);
    navigate("/login");
  };

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* Show Landing Page ONLY ONCE */}
        {!hasSeenLanding ? (
          <Route path="/" element={<PageWrap animationType="fadeUp"><Landing onProceed={handleLandingVisit} /></PageWrap>} />
        ) : (
          <Route path="/" element={<PageWrap animationType="fadeUp"><Login /></PageWrap>} />
        )}

        <Route path="/login" element={<PageWrap animationType="fadeUp"><Login /></PageWrap>} />
        <Route path="/register" element={<PageWrap animationType="fadeUp"><Register /></PageWrap>} />
        <Route path="/verify-email" element={<PageWrap animationType="fadeUp"><EmailVerification /></PageWrap>} />

        <Route path="/setup-organization" element={<PageWrap animationType="slideLeft"><SetupOrganization /></PageWrap>} />
        <Route path="/scraping-progress" element={<PageWrap animationType="slideLeft"><ScrapingProgress /></PageWrap>} />
        <Route path="/chatbot-integration" element={<PageWrap animationType="slideLeft"><ChatbotIntegration /></PageWrap>} />
        <Route path="/integration-success" element={<PageWrap animationType="scaleIn"><IntegrationSuccess /></PageWrap>} />
        <Route path="/integration-failure" element={<PageWrap animationType="fadeUp"><IntegrationFailure /></PageWrap>} />

        <Route path="/admin-panel" element={<PageWrap animationType="scaleIn"><AdminDashboard /></PageWrap>} />
        <Route path="*" element={<PageWrap animationType="fadeUp"><Login /></PageWrap>} />
      </Routes>
    </AnimatePresence>
  );
}

// Page Wrapper with Dynamic Transitions
function PageWrap({ children, animationType = "fadeUp" }) {
  const variants = {
    fadeUp: { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -20 } },
    scaleIn: { initial: { scale: 0.8, opacity: 0 }, animate: { scale: 1, opacity: 1 }, exit: { scale: 0.8, opacity: 0 } },
    slideLeft: { initial: { x: 50, opacity: 0 }, animate: { x: 0, opacity: 1 }, exit: { x: -50, opacity: 0 } },
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={variants[animationType]}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}

// Loading Screen (for Suspense)
function LoadingScreen() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <p className="text-primary font-semibold text-lg">Loading...</p>
    </div>
  );
}
