import React, { FC, useEffect, useState } from "react";
import { BrowserRouter as Router, HashRouter, Switch, Route } from "react-router-dom";
import { ipcRenderer } from "electron";
import { MemberType, UserContext } from "../appContext/appContext";
import { useHistory } from "react-router-dom";

// import Pages
import Setting from "../pages/SettingPage/Setting";
import UserProfile from "../pages/UserProfile/UserProfile";
import Main from "../pages/Main";
import OsInfo from "../pages/OsInfo/OsInfo";
import { actionTypes } from "../appContext/reducer";
import { AppContext } from "../appContext/appContext";
import { getLocalStorage, setLocalStorage, sendMsgtoMain } from "../../Utils/Utils";
import UpgradePlan from "../pages/UpgradePlan/UpgradePlan";

const MyRoutes: FC = () => {
  const [state, setState] = useState<AppContext>({
    currentUser: {
      name: "shadab",
      email: "shadab19it@gamil.com",
      memberType: "basic",
    },
    appVersion: "",
    isAutoLaunch: true,
  });

  useEffect(() => {
    console.log("app-loaded");
    sendMsgtoMain("app_version", "");
    ipcRenderer.on("app_version", (e, v) => {
      setState((prv) => ({ ...prv, appVersion: v }));
    });
    return () => ipcRenderer.removeAllListeners("app_version");
  }, []);

  useEffect(() => {
    if (getLocalStorage("isAutoLaunch")) {
      const isOn = getLocalStorage("isAutoLaunch");
      sendMsgtoMain("auto-launch", isOn);
      setState((prv) => ({ ...prv, isAutoLaunch: isOn }));
    } else {
      sendMsgtoMain("auto-launch", state.isAutoLaunch);
    }
    return () => ipcRenderer.removeAllListeners("auto-launch");
  }, [state.isAutoLaunch]);

  const autoLaunch = (isOn: boolean) => {
    setLocalStorage("isAutoLaunch", isOn);
    setState((prv) => ({ ...prv, isAutoLaunch: isOn }));
  };

  const onSelectPlan = (plan: MemberType) => {
    setState({ ...state, currentUser: { ...state.currentUser, memberType: plan } });
  };
  return (
    <HashRouter>
      <UserContext.Provider value={{ currentUser: state.currentUser, isAutoLaunch: state.isAutoLaunch, appVersion: state.appVersion }}>
        <Switch>
          <Route exact path='/' render={() => <Main selectedKey={"1"} page={<OsInfo />} />} />
          <Route exact path='/upgrade/plane' render={() => <Main selectedKey={"2"} page={<UpgradePlan onSelectPlan={onSelectPlan} />} />} />
          <Route exact path='/setting' render={() => <Main selectedKey='4' page={<Setting autoLaunch={autoLaunch} />} />} />
          <Route exact path='/user/profile' render={() => <Main selectedKey='3' page={<UserProfile />} />} />
        </Switch>
      </UserContext.Provider>
    </HashRouter>
  );
};

export default MyRoutes;
