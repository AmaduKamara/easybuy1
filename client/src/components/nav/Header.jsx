import React, { useState } from "react";
import { Menu } from "antd";
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from "@ant-design/icons";

const Header = () => {
  const [current, setCurrent] = useState();

  const { SubMenu } = Menu;

  const handleClick = () => {
    //
  };

  return (
    <header className="px-24">
      <Menu
        onClick={handleClick}
        selectedKeys={[current]}
        mode="horizontal"
        className="container mx-auto"
      >
        <Menu.Item key="mail" icon={<MailOutlined />}>
          Home
        </Menu.Item>
        <SubMenu key="SubMenu" title="Register" icon={<SettingOutlined />}>
          <Menu.Item key="two" icon={<AppstoreOutlined />}>
            Navigation Two
          </Menu.Item>
          <Menu.Item key="three" icon={<AppstoreOutlined />}>
            Navigation Three
          </Menu.Item>
        </SubMenu>
      </Menu>
    </header>
  );
};

export default Header;
