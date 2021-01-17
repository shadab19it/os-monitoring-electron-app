import React, { FC, useState, useEffect } from "react";
import { Switch } from "antd";
import { ipcRenderer } from "electron";

const About: FC = () => {
  const [isAutoLaunch, setAutoLaunch] = useState<boolean>(true);
  const onChange = (checked: boolean) => {
    setAutoLaunch(checked);
  };

  ipcRenderer.on("auto-launch", (e, v) => {
    setAutoLaunch(v);
  });
  useEffect(() => {
    ipcRenderer.send("auto-launch", isAutoLaunch);
    return () => ipcRenderer.removeAllListeners("auto-launch");
  }, [isAutoLaunch]);

  console.log("render ", isAutoLaunch);

  return (
    <div>
      <h1 style={{ color: "#fff" }}>Electron Monoting App ----</h1>
      <h2 style={{ color: "#fff" }}>Auto Lunch</h2>
      <Switch defaultChecked onChange={onChange} />
    </div>
  );
};

export default About;
