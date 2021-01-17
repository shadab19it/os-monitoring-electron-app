import React, { FC, createContext, useContext, useReducer } from "react";
import { IAction, IinitialState } from "./reducer";

export const StateContext = createContext<any>("");

interface IStateProvider {
  children: JSX.Element;
  initialState: IinitialState;
  reducer: any;
}

export const StateProvider: FC<IStateProvider> = ({ children, reducer, initialState }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>{children}</StateContext.Provider>
);

export const useAppContext = () => useContext(StateContext);
