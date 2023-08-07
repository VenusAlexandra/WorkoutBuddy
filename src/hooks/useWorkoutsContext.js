import { WorkoutsContext } from "../context/WorkoutsContext";
import { useContext } from "react";

// Hook function
export const useWorkoutsContext = () => {
  // value of workoutsContext stored inside this object
  const context = useContext(WorkoutsContext);

  if (!context) {
    throw Error(
      "useWorkoutsContext must be used inside an WorkoutsContextProvider"
    );
  }

  return context;
};
