import React from "react";
import {
  SidebarContainer,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap1,
  SideBtnWrap2,
  SidebarRoute1,
  SidebarRoute2,
} from "../style/HamburgerStyle";

const Sidebar = ({ isOpen, mytoggleHandler }) => {
  return (
    <>
      <SidebarContainer isOpen={isOpen} onClick={mytoggleHandler}>
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarLink href='#!' onClick={mytoggleHandler}>
              Features
            </SidebarLink>
            <SidebarLink href='#!' onClick={mytoggleHandler}>
              Pricing
            </SidebarLink>
            <SidebarLink href='#!' onClick={mytoggleHandler}>
              Resources
            </SidebarLink>
          </SidebarMenu>
          <SideBtnWrap1>
            <SidebarRoute1 href='#!'>Login</SidebarRoute1>
          </SideBtnWrap1>
          <SideBtnWrap2>
            <SidebarRoute2 href='#!'>Sign Up</SidebarRoute2>
          </SideBtnWrap2>
        </SidebarWrapper>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
