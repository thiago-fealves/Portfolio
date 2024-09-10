// Modules
import React, { createContext, useState, ReactNode, useEffect } from "react";

// Instantiating and initializing language setting
interface LanguageContextType {
  portugues: boolean;
  toggleLanguage: () => void;
}
const initialLanguageContext: LanguageContextType = {
  portugues: false,
  toggleLanguage: () => {},
};
export const LanguageContext = createContext<LanguageContextType>(
  initialLanguageContext
);
interface LanguageProviderProps {
  children: ReactNode;
}

// Language Provider Component
export const LanguageProvider: React.FC<LanguageProviderProps> = ({
  children,
}) => {
  const [portugues, setPortugues] = useState(false);
  useEffect(() => {
    const userLanguage = navigator.language;
    if (userLanguage.startsWith("pt")) {
      setPortugues(true);
    }
  }, []);

  const toggleLanguage = () => {
    setPortugues(!portugues);
  };

  return (
    <LanguageContext.Provider value={{ portugues, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
