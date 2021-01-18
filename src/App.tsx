import React, { FC } from "react";
import ReactDOM from "react-dom";
import "./style/global_style.scss";
import MyRoutes from "./routes/MyRoutes";
import { initialState } from "./appContext/reducer";
import reducer from "./appContext/reducer";
ReactDOM.render(<MyRoutes />, document.getElementById("root"));
