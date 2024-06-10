/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext } from "react";

export const StateContext = createContext(null);

export const StateContextProvider = StateContext.Provider;

export const useStateValue = () => useContext(StateContext);
