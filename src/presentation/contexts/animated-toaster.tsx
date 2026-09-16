import { createContext } from "react";


type AnimatedToasterContextType = {
  showToaster: ({message}: {message: string}) => void;
}

export const AnimatedToasterContext = createContext({} as AnimatedToasterContextType);
