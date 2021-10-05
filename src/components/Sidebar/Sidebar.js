import React from "react";
import TwitterIcon from "@material-ui/icons/Twitter";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption/SidebarOption";

function Sidebar() {
  return (
    <div className="sidebar">
      <TwitterIcon />
      <SidebarOption Icon={HomeIcon} text="Home" />
      <SidebarOption Icon={SearchIcon} text="Explore" />
      <SidebarOption Icon={NotificationsNoneIcon} text="Notifications" />
      <SidebarOption Icon={HomeIcon} text="Home" />
    </div>
  );
}

export default Sidebar;
