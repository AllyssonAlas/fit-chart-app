import { createContext } from "react";


type AnimatedToasterContextType = {
  showToaster: ({message, status}: {message: string, status: 'success' | 'error' | 'info' | 'warning'}) => void;
}

export const AnimatedToasterContext = createContext({} as AnimatedToasterContextType);
