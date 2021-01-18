import React, { FC, useState, useEffect, useContext } from "react";
import { Switch } from "antd";
import { app, ipcRenderer } from "electron";
import "./Setting.scss";
import { UserContext } from "../../appContext/appContext";
import { sendMsgtoMain } from "../../Utils/Utils";

const Setting: FC<{ autoLaunch: (autoLaunch: boolean) => void }> = ({ autoLaunch }) => {
  const appState = useContext(UserContext);
  const onChange = (isChecked: boolean) => {
    autoLaunch(isChecked);
  };

  useEffect(() => {
    sendMsgtoMain("auto-launch", appState.isAutoLaunch);
    return () => ipcRenderer.removeAllListeners("auto-launch");
  }, [appState.isAutoLaunch]);

  return (
    <div className='setting-page-wrapper'>
      <div className='header-title'>App Settings </div>
      <section className='sec-one'>
        <div className='row-one'>
          <div className='label'>Auto Launch on restart : {appState.isAutoLaunch ? "ON" : "OFF"} </div>
          <div className='action-btn'>
            <Switch defaultChecked={appState.isAutoLaunch} onChange={onChange} />
          </div>
        </div>
        <div className='desc'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut magnam, ratione nobis fugit inventore culpa amet nihil nam itaque
            repudiandae?
          </p>
        </div>
      </section>
    </div>
  );
};

export default Setting;
