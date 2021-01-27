import React, { FC, useContext } from "react";
import { UserOutlined, LaptopOutlined, NotificationOutlined, DashboardOutlined, SettingOutlined } from "@ant-design/icons";
import Sider from "antd/lib/layout/Sider";
import SubMenu from "antd/lib/menu/SubMenu";
import { Button, Menu } from "antd";
import { Link } from "react-router-dom";
import { UserContext } from "../../appContext/appContext";

const SideNav: FC<{ selectedKey: string }> = ({ selectedKey }) => {
  const [showDialog, setShowDialog] = React.useState(false);
  const appState = useContext(UserContext);
  const [isNavOpen, setNavOpen] = React.useState(false);
  React.useEffect(() => {
    setShowDialog(true);
  }, []);
  return (
    <Sider collapsed={isNavOpen} onCollapse={() => setNavOpen(!isNavOpen)} width={180} className='side-nav'>
      <div className='brand-name'>
        <span className='brand-icon'>
          <DashboardOutlined />
        </span>
        <span style={{ display: isNavOpen ? "none" : "block" }}>Monitoring Os</span>
      </div>
      {showDialog && (
        <div className='update-popup'>
          <p className='desc'>New Version are downloaded</p>
          <div className='action-bts'>
            <Button size='small' type='default' className='btn-install'>
              Install
            </Button>
            <Button size='small' onClick={() => setShowDialog(false)} type='default' className='btn-later'>
              Later
            </Button>
          </div>
        </div>
      )}
      <Menu mode='inline' theme='dark' selectedKeys={[selectedKey]} style={{ height: "100%", borderRight: 0 }}>
        <Menu.Item key='1' icon={<LaptopOutlined />}>
          <Link to='/'>Os Info</Link>
        </Menu.Item>
        <Menu.Item key='3' icon={<UserOutlined />}>
          <Link to='/user/profile'>User Profile</Link>
        </Menu.Item>
        <Menu.Item key='2' icon={<NotificationOutlined />}>
          <Link to='/upgrade/plane'>Upgrade Plane</Link>
        </Menu.Item>
        <Menu.Item key='4' icon={<SettingOutlined />}>
          <Link to='/setting'>App Setting</Link>
        </Menu.Item>
        <Menu.Item key='5'>V : {appState.appVersion}</Menu.Item>
      </Menu>
    </Sider>
  );
};

export default SideNav;
