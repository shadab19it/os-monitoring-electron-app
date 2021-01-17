import React, { FC } from "react";
import SideNav from "../component/Layout/SideNav";
import "./Main.scss";

const Main: FC<{ selectedKey: string; page: JSX.Element }> = ({ selectedKey, page }) => {
  return (
    <div className='main-wrapper'>
      <div className='side-nav-wrapper'>
        <SideNav selectedKey={selectedKey} />
      </div>
      <div className='main-content-warpper'>{page}</div>
    </div>
  );
};

export default Main;
