import { ipcRenderer } from "electron";

export const setLocalStorage = (name: string, data: any) => localStorage.setItem(name, JSON.stringify(data));
export const getLocalStorage = (name: string) => JSON.parse(localStorage.getItem(name));

export const sendMsgtoMain = (msgName: string, value: any) => {
  ipcRenderer.send(msgName, value);
};
