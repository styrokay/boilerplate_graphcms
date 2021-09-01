import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export function AppWrapper({ children }) {
  const [dark, setDark] = useState(false);

  return <AppContext.Provider value={dark}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  return useContext(AppContext);
}
