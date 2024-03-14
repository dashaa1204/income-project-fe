import Currency from "@/components/steps/Currency";
import { useContext, useState, createContext } from "react";

const StepContext = createContext();
export const useStepData = () => useContext(StepContext);
export function StepsProvider({ children }) {
  const [steps, setSteps] = useState(<Currency />);
  const [cur, setCur] = useState();
  const [ida, setIda] = useState("aaa");

  return (
    <StepContext.Provider value={{ setSteps, steps, setCur, cur, ida, setIda }}>
      {children}
    </StepContext.Provider>
  );
}
