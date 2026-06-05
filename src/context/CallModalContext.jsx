/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useRef, useState } from "react";

const CallModalContext = createContext();

export function CallModalProvider({ children }) {
  const [open, setOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState(null);
  const timerRef = useRef(null);

  // Auto-open modal — desktop: 10s, mobile: 15s
  useEffect(() => {
    if (currentPath === null) return;
    if (timerRef.current) clearTimeout(timerRef.current);
    const delay = window.innerWidth <= 640 ? 15000 : 10000;
    timerRef.current = setTimeout(() => {
      setOpen(true);
    }, delay);
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
