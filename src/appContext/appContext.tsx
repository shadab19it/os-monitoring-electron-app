import React, { FC, createContext, useContext, useReducer } from "react";
import { IAction, IinitialState } from "./reducer";

export type MemberType = "gold" | "enterprices" | "basic";
export interface Member {
  name: string;
  email: string;
  memberType: MemberType;
}

export interface AppContext {
  currentUser: Member;
  isAutoLaunch: boolean;
  appVersion: string;
}
const UserContext = createContext<AppContext>({
  currentUser: {
    name: "",
    email: "",
    memberType: "basic",
  },
  isAutoLaunch: true,
  appVersion: "",
});

export { UserContext };

// export const StateContext = createContext<any>("");

// interface IStateProvider {
//   children: JSX.Element;
//   initialState: IinitialState;
//   reducer: any;
// }

// export const StateProvider: FC<IStateProvider> = ({ children, reducer, initialState }) => (
//   <StateContext.Provider value={useReducer(reducer, initialState)}>{children}</StateContext.Provider>
// );

// export const useAppContext = () => useContext(StateContext);
