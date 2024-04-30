import { useContext } from "react";
import { GlobalContext } from "./GlobalStateProvider";

const useGlobalState = () => {
  const allStates = useContext(GlobalContext);
  return allStates;
};

export default useGlobalState;
