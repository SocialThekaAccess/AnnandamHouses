import { createContext, useContext, useState } from "react";

const CallModalContext = createContext();

export function CallModalProvider({ children }) {
  const [open, setOpen] = useState(false);
  return (
    <CallModalContext.Provider value={{ open, setOpen }}>
      {children}
    </CallModalContext.Provider>
  );
}

export function useCallModal() {
  return useContext(CallModalContext);
}
