/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useRef, useState } from "react";

const CallModalContext = createContext();

export function CallModalProvider({ children }) {
  const [open, setOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState(null);
  const timerRef = useRef(null);

  // Auto-open modal 2 seconds after every page navigation
  useEffect(() => {
    if (currentPath === null) return;
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setOpen(true);
    }, 0);
    return () => clearTimeout(timerRef.current);
  }, [currentPath]);

  return (
    <CallModalContext.Provider value={{ open, setOpen, setCurrentPath }}>
      {children}
    </CallModalContext.Provider>
  );
}

export function useCallModal() {
  return useContext(CallModalContext);
}
