import React, { FC } from "react";
import ReactDOM from "react-dom";
import MyRoutes from "./routes/MyRoutes";
import "./style/global_style.scss";
import { initialState } from "./appContext/reducer";
import reducer from "./appContext/reducer";
ReactDOM.render(<MyRoutes />, document.getElementById("root"));
