import React, { FC } from "react";
import ReactDOM from "react-dom";
import "./style/global_style.scss";
import MyRoutes from "./routes/MyRoutes";
import { StateProvider } from "./appContext/appContext";
import { initialState } from "./appContext/reducer";
import reducer from "./appContext/reducer";
ReactDOM.render(
  <StateProvider initialState={initialState} reducer={reducer}>
    <MyRoutes />
  </StateProvider>,
  document.getElementById("root")
);
