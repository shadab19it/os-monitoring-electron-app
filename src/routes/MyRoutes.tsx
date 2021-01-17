import React, { FC, useEffect } from "react";
import { BrowserRouter as Router, HashRouter, Switch, Route } from "react-router-dom";
import { ipcRenderer } from "electron";
import { useAppContext } from "../appContext/appContext";
import { useHistory } from "react-router-dom";

// import Pages
import About from "../pages/About/About";
import UserProfile from "../pages/UserProfile/UserProfile";
import Main from "../pages/Main";
import OsInfo from "../pages/OsInfo/OsInfo";
import { actionTypes } from "../appContext/reducer";

const MyRoutes: FC = () => {
  const history = useHistory();
  const [dispatch, state] = useAppContext();
  useEffect(() => {
    console.log("app-loaded");
    ipcRenderer.send("app_version", "give app version");
  }, []);

  console.log("state value", state.appVersion);
  ipcRenderer.on("app_version", (e, v) => {
    console.log("msg ", v);
    dispatch({ type: actionTypes.SET_APP_VerSion, payload: v });
  });

  ipcRenderer.on("open:page", (e, v) => {
    history.push("/about");
    console.log("url ", `${v}`);
  });
  return (
    <HashRouter>
      <Switch>
        <Route exact path='/' render={() => <Main selectedKey={"1"} page={<OsInfo />} />} />
        <Route exact path='/upgrade/plane' render={() => <Main selectedKey={"2"} page={<div>Upgrage Plane</div>} />} />
        <Route exact path='/about' render={() => <Main selectedKey='4' page={<About />} />} />
        <Route exact path='/user/profile' render={() => <Main selectedKey='3' page={<UserProfile />} />} />
      </Switch>
    </HashRouter>
  );
};

export default MyRoutes;
