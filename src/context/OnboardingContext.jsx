



import React, { createContext, useState, useContext, useEffect } from "react";

// Create context
const OnboardingContext = createContext(null);

// Hook for using onboarding data
export const useOnboarding = () => useContext(OnboardingContext);

export const OnboardingProvider = ({ children }) => {
  // Load initial state from session storage (if exists)
  const initialState = JSON.parse(sessionStorage.getItem("onboardingData")) || {
    companyName: "",
    websiteUrl: "",
    description: "",
    metaDescription: "",
  };

  const [onboardingData, setOnboardingData] = useState(initialState);

  // Function to update any onboarding field dynamically
  const updateOnboardingData = (field, value) => {
    setOnboardingData((prev) => {
      const updatedData = { ...prev, [field]: value };
      sessionStorage.setItem("onboardingData", JSON.stringify(updatedData)); // Persist state
      return updatedData;
    });
  };

  useEffect(() => {
    sessionStorage.setItem("onboardingData", JSON.stringify(onboardingData));
  }, [onboardingData]);

  return (
    <OnboardingContext.Provider value={{ onboardingData, updateOnboardingData }}>
      {children}
    </OnboardingContext.Provider>
  );
};
